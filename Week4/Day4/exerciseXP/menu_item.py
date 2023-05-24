import psycopg2

def manage_connection(query):
    try:
        connection = psycopg2.connect(
            host='localhost',
            port='5432',
            database='Restaurant',
            user='ivankozin',
            password='2158310'
        )
        with connection:
            with connection.cursor() as cursor:
                if "SELECT" in query:
                    cursor.execute(query)
                    result = cursor.fetchall()
                    return result
                else:
                    cursor.execute(query)
                    connection.commit()
    except Exception as e:
        print(e)
    finally:
        connection.close()

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item = item_name
        self.price = item_price

    def save_item(self):
        query_user = f"""
        INSERT INTO menu_items (item_name, item_price)
        VALUES ('{self.item}', {self.price})
        """
        manage_connection(query_user)

    def delete_item(self):
        query_user = f"""
        DELETE FROM menu_items
        WHERE item_name = '{self.item}' AND item_price = {self.price}
        """
        manage_connection(query_user)

    def update_item(self, new_name, new_price):
        query_user = f"""UPDATE menu_items
        SET item_name = '{new_name}', item_price = {new_price}
        WHERE item_name = '{self.item}'
        """
        manage_connection(query_user)

# item = MenuItem('Burger', 35)
# item.save_item()
# item.delete_item()
# item.update_item('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()

    # def update_item(self):
    #     query_user = f"""
    #     UPDATE 
    #     """