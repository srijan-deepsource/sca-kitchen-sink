from cryptography.fernet import Fernet

def get_key():
    return Fernet.generate_key()
