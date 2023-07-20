import db from '../config/database.js';
import bcrypt from 'bcrypt';

// export const login = async({
//     username,
//     password
// }) => {
//     const trx = await db.transaction();

//     try {
//         const user = await trx('login')
//         .where({
//             username
//         })
//         .first()

//         if (!user) {
//             throw new Error('Invalid username');
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password);

//         if (!passwordMatch) {
//             throw new Error('Invalid password');
//           }

//         await trx.commit();

//         return user
//     } catch (err) {
//         await trx.rollback()
//         throw new Error(err.message)
//     }
// }

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
            username, // username: username --> the same
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

export const updateLastLogin = (e) => {
    return db('users')
    .update({last_login: new Date()})
}

export const login = (username) => {
    return db('login')
    .select('password')
    .where({username})
}
