# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module.

from googletrans import Translator, constants
translator = Translator()
translation = translator.translate("Bonjour")
print(f"{translation.origin} ({translation.src}) --> {translation.text} ({translation.dest})")