import openpyxl
import tabulate
import json

wb = openpyxl.load_workbook('excel_trello.xlsx')

sheet = wb['Sheet1']

data = []

for row in sheet.iter_rows(values_only=True):
    data.append(row)

print(tabulate.tabulate(data, headers="firstrow"))
header = data[0]
data = data[1:]

table = {}
prev_column = data[1][0]
table[prev_column] = []

for col_name, col_data in data:
    if col_name == prev_column:
        table[col_name].append(col_data)
    else:
        table[col_name] = []
        prev_column = col_name

print(table)

react_table_data = {
    "lanes": [
    ],
}

for col_name, col_data in table.items():
    lane = {
        "id": col_name,
        "label": col_name,
        "style": {
            "width": 200
        },
        "cards": []
    }

    for card in col_data:
        lane["cards"].append({
            "id": card,
            "title": card,
            "description": "",
            "label": "",
            "metadata": ""
        })

    react_table_data["lanes"].append(lane)

print(react_table_data)

with open("data.json", "w") as f:
    f.write(json.dumps(react_table_data, indent=4))

# Create a typescript interface
interface = "export interface Card {\n"
interface += "\tid: string;\n"
interface += "\ttitle: string;\n"
interface += "\tdescription: string;\n"
interface += "\tlabel: string;\n"
interface += "\tmetadata: string;\n"
interface += "}\n"

interface += "export interface Lane {\n"
interface += "\tid: string;\n"
interface += "\tlabel: string;\n"
interface += "\tstyle: {\n"
interface += "\t\twidth: number;\n"
interface += "\t}\n"
interface += "\tcards: Card[];\n"
interface += "}\n"

interface += "export interface Table {\n"
interface += "\tlanes: Lane[];\n"
interface += "}\n"

with open("../kabanBoardData.ts", "w") as f:
    f.write(interface)

    # Dump the kabanBoardData to a ts file with the interface
    f.write("export const kabanBoardData: Table = ")
    f.write(str(react_table_data))
    f.write(";\n")
