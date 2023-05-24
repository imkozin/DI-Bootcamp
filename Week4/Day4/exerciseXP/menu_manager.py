import psycopg2
from menu_item import *

class MenuManager:
        
    @classmethod
    def get_by_name(cls, name):
        query_user = f"""
        SELECT item_name FROM menu_items 
        WHERE item_name = '{name}'
        """
        if manage_connection(query_user) == []:
            return None
        else:
            result = manage_connection(query_user)
            return result
        
    @classmethod
    def all_items(cls):
        query_user = f"""
        SELECT * FROM menu_items
        """
        result = manage_connection(query_user)
        return result

# item2 = MenuManager.get_by_name('Beef Stew')
items = MenuManager.all_items()
print(items)