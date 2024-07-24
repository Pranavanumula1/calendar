class Event:
    def __init__(self, name, date, location, description, image_url):
        self.name = name
        self.date = date
        self.location = location
        self.description = description
        self.image_url = image_url

    def to_dict(self):
        return {
            'name': self.name,
            'date': self.date,
            'location': self.location,
            'description': self.description,
            'image_url': self.image_url
        }
