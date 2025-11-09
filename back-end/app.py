from core.dependency_manager import dependencyManager

# dependencyManager()

from core.database_manager import criaDatabase
from core.flask_core import startApi

criaDatabase()
startApi()
