import db from '../config/database.js';

export const register = async({
    first_name,
    last_name,
    username,
    email,
    hash
}) => {
    const trx =  await db.transaction(); 

    try {
        const user = await db('users') // or await trx('users')
        .insert({
            first_name,
            last_name,
            username,
            email,
            last_login: new Date()
        }, ['user_id', 'first_name', 'last_name', 'username', 'email']) // .returning(['user_id', 'username', 'email', 'first_name', 'last_name']))
        .transacting(trx);

        console.log('user =>', user);

        const login = await db('login')
        .insert({
            username: user[0].username, // username: username --> the same
            password: hash,
        }, ['login_id', 'username', 'password'])
        .transacting(trx);

        console.log('login =>', login);

        await trx.commit();

        return user;

    } catch (err) {
        console.log('error =>', err);
        await trx.rollback();
        throw new Error(err.message)
    }
};