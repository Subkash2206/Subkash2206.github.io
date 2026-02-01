"""
Reorders HTML sections in portfolio to match navigation order
"""

# Read the HTML file
with open(r'c:\Users\subka\OneDrive\Desktop\portfolio\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define section markers
sections = {
    'about_start': '      <!-- About Section -->',
    'news_start': '      <!-- News / Achievements -->',
    'research_start': '      <!-- Research Experience -->',
    'leadership_start': '      <!-- Leadership & Community -->',
    'projects_start': '      <!-- Projects -->',
    'publications_start': '      <!-- Publications -->',
    'skills_start': '      <!-- Skills -->',
    'coursework_start': '      <!-- Relevant Coursework -->',
    'footer_start': '      <!-- Footer -->'
}

# Extract each section
def extract_section(content, start_marker, end_marker):
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    if start_idx == -1 or end_idx == -1:
        return ""
    return content[start_idx:end_idx]

# Extract all sections
about = extract_section(content, sections['about_start'], sections['news_start'])
news = extract_section(content, sections['news_start'], sections['research_start'])
research = extract_section(content, sections['research_start'], sections['leadership_start'])
leadership = extract_section(content, sections['leadership_start'], sections['projects_start'])
projects = extract_section(content, sections['projects_start'], sections['publications_start'])
publications = extract_section(content, sections['publications_start'], sections['skills_start'])
skills = extract_section(content, sections['skills_start'], sections['coursework_start'])
coursework = extract_section(content, sections['coursework_start'], sections['footer_start'])

# Get header (everything before About section)
header = content[:content.find(sections['about_start'])]

# Get footer (from Footer marker to end)
footer = content[content.find(sections['footer_start']):]

# Reorder: About → Research → Projects → Publications → News → Leadership → Skills → Coursework
reordered_content = (
    header +
    about +
    research +
    projects +
    publications +
    news +
    leadership +
    skills +
    coursework +
    footer
)

# Write back
with open(r'c:\Users\subka\OneDrive\Desktop\portfolio\index.html', 'w', encoding='utf-8') as f:
    f.write(reordered_content)

print("✅ Sections reordered successfully!")
print("New order: About → Research → Projects → Publications → News → Leadership → Skills → Coursework")
