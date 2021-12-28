names = [
    'Garment Dyed & Acid Wash Straight Hem',
    'Washed Easy',
    'Basic Big Script Logo Crew Neck Comfort Fit',
    'Halden CS Santo Domingo Denim 11.20 Oz',
    'Casablanca XC-72',
    'Undercover NRG UBA',
    'LS Adicolor Classics 3-Stripes',
    'Printed Platte Sherpa 1/4 Zip',
    'Fit Polo Bear Corduroy',
    'Black Light Tie-Dye',
    'All Over Polo Pony Jogger',
    'Polo Bear Blazer And Corduroy Pants',
    'Classic Fit Polo Bear Corduroy',
    'Polo Ralph Lauren '
]

data = []
for name in names:
    n = '_'.join(name.lower().split()) + '.jpg'
    data.append(n)

print(data)