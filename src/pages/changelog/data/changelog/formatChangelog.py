import re
from datetime import datetime


def parse_changelog(filepath):
    """
    Parses a changelog file and extracts information into a structured format.

    Args:
        filepath: The path to the changelog.txt file.

    Returns:
        A list of dictionaries, where each dictionary represents a phase
        and contains a list of phase items with date, user, and descriptions.
    """

    phases = []
    current_phase = None
    current_phase_items = []
    current_date = None
    current_user = None
    current_descriptions = []

    with open(filepath, 'r') as f:
        for line in f:
            line = line.strip()

            # Detect phase start
            phase_match = re.match(r"^(.*) \((\d{4}-\d{2}-\d{2} to \d{4}-\d{2}-\d{2})\)$", line)
            if phase_match:
                if current_phase:
                    if current_date and current_user and current_descriptions:
                        current_phase_items.append({
                            "date": current_date,
                            "user": current_user,
                            "descriptions": current_descriptions
                        })
                    phases.append({
                        "phase_name": current_phase,
                        "phase_items": current_phase_items
                    })
                current_phase = phase_match.group(1)
                current_phase_items = []
                current_date = None
                current_user = None
                current_descriptions = []
                continue

            # Detect date and user
            date_user_match = re.match(r"^(\d{4}-\d{2}-\d{2}) \(([^)]+)\)$", line)
            if date_user_match:
                if current_date and current_user and current_descriptions:
                    current_phase_items.append({
                        "date": current_date,
                        "user": current_user,
                        "descriptions": current_descriptions
                    })
                current_date = date_user_match.group(1)
                current_user = date_user_match.group(2).replace("_", " ").split(",")[0]
                current_descriptions = []
                continue

            # Detect description
            if line.startswith("Added") or line.startswith("Implemented") or line.startswith(
                    "Refactored") or line.startswith("Resolved") or line.startswith("Initial") or line.startswith(
                "Transitioned") or line.startswith("Removal") or line.startswith("Merged") or line.startswith(
                "Changed") or line.startswith("Made") or line.startswith("Fixes") or line.startswith(
                "Fix") or line.startswith("Updated") or line.startswith("Removed") or line.startswith("Enhanced"):
                if current_date and current_user:
                    current_descriptions.append(line)
                continue

            # End of descriptions for a user on a date
            if current_date and current_user and not line.startswith("Added") and not line.startswith(
                    "Implemented") and not line.startswith("Refactored") and not line.startswith(
                "Resolved") and not line.startswith("Initial") and not line.startswith(
                "Transitioned") and not line.startswith("Removal") and not line.startswith(
                "Merged") and not line.startswith("Changed") and not line.startswith(
                "Made") and not line.startswith("Fixes") and not line.startswith("Fix") and not line.startswith(
                "Updated") and not line.startswith("Removed") and not line.startswith(
                "Enhanced") and line != "" and not date_user_match and not phase_match:
                if current_descriptions:
                    current_phase_items.append({
                        "date": current_date,
                        "user": current_user,
                        "descriptions": current_descriptions
                    })
                    current_date = None
                    current_user = None
                    current_descriptions = []

    # Add the last phase
    if current_phase:
        if current_date and current_user and current_descriptions:
            current_phase_items.append({
                "date": current_date,
                "user": current_user,
                "descriptions": current_descriptions
            })
        phases.append({
            "phase_name": current_phase,
            "phase_items": current_phase_items
        })

    return phases


def sort_phase_items_by_date(parsed_data):
    """
    Sorts the phase items within each phase by date in descending order (newest to oldest).

    Args:
        parsed_data: The parsed changelog data (output of parse_changelog).

    Returns:
        The parsed changelog data with phase items sorted by date.
    """

    for phase in parsed_data:
        phase["phase_items"].sort(
            key=lambda item: datetime.strptime(item["date"], "%Y-%m-%d"),
            reverse=True
        )
    return parsed_data


# Example Usage
filepath = "changelog.txt"  # Replace with your changelog file
parsed_data = parse_changelog(filepath)

# Sort phase items by date
sorted_data = sort_phase_items_by_date(parsed_data)

# Print or save the sorted data
import json

print(json.dumps(sorted_data, indent=4))

with open("parsed_changelog.json", "w") as f:
    json.dump(sorted_data, f, indent=4)

with open("../parsed_changelog.ts", "w") as f:
    f.write("import ParsedChangelog from \"../../../utils/types/changelog\";")
    f.write("\n\n")
    f.write("export const parsedChangelog: ParsedChangelog = ")

    json.dump(sorted_data, f, indent=4)
    f.write(";")
