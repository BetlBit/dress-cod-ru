names = [
    'Garment Dyed & Acid Wash Straight Hem',
    'Washed Easy',
    'Basic Big Script Logo Crew Neck Comfort Fit',
    'Halden CS Santo Domingo Denim 11.20 Oz',
    'Casablanca XC-72',
    'Undercover NRG UBA'
]

data = []
for name in names:
    n = '_'.join(name.lower().split()) + '.jpg'
    data.append(n)

print(data)