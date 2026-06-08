import os
from fpdf import FPDF
from PIL import Image

class AcademyPortfolioPDF(FPDF):
    def header(self):
        # Top margin color bar (Apple style sleek line - pure black)
        self.set_fill_color(0, 0, 0)
        self.rect(0, 0, 210, 4, 'F')
        
    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(156, 163, 175) # Light grey
        self.cell(0, 10, f"Darrell Rafa Alamsyah  |  Apple Developer Academy Portfolio  |  Page {self.page_no()}", align="C")

def create_portfolio():
    pdf = AcademyPortfolioPDF(orientation="P", unit="mm", format="A4")
    pdf.set_margins(15, 15, 15)
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()
    
    # ------------------ PROFILE HEADER (BLACK & WHITE) ------------------
    pdf.set_y(12)
    pdf.set_font("Helvetica", "B", 24)
    pdf.set_text_color(0, 0, 0) # Pure black
    pdf.cell(0, 10, "DARRELL RAFA ALAMSYAH", new_x="LMARGIN", new_y="NEXT", align="L")
    
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(55, 65, 81) # Dark grey
    pdf.cell(0, 6, "Full Stack Developer & AI/ML Integrator", new_x="LMARGIN", new_y="NEXT", align="L")
    
    # Contact & Social Links
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(107, 114, 128) # Muted grey
    contact_info = "Email: darrell2645@gmail.com  |  GitHub: github.com/darrellrafa  |  LinkedIn: linkedin.com/in/darrellrafa"
    pdf.cell(0, 6, contact_info, new_x="LMARGIN", new_y="NEXT", align="L")
    
    # Horizontal separator line
    pdf.ln(2)
    pdf.set_draw_color(0, 0, 0) # Black separator
    pdf.set_line_width(0.7)
    pdf.line(15, pdf.get_y(), 195, pdf.get_y())
    pdf.ln(5)
    
    # Brief Intro/Statement matching Apple Academy focus
    pdf.set_font("Helvetica", "I", 10)
    pdf.set_text_color(55, 65, 81)
    intro_text = (
        "Showcase of 5 selected projects submitted for the Apple Developer Academy Indonesia. "
        "Each project highlights interest & motivation, creativity, interdisciplinary potential, "
        "and technical problem-solving capabilities."
    )
    pdf.multi_cell(0, 5, intro_text, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)

    # ------------------ PROJECTS DATA ------------------
    projects = [
        {
            "num": "1",
            "title": "E-Learning Platform",
            "tech": "Next.js, Appwrite, Groq API",
            "origin": "Coursework (Software Engineering)",
            "team": "Group Project (4 Members)",
            "role": "Lead Fullstack Developer & AI Integrator",
            "summary": "An interactive e-learning platform that gamifies school coursework into a progression-based adventure for children, featuring a virtual economy and an on-demand AI tutor to personalize study guides.",
            "impact": "Engineered the core progression database models, built the virtual reward economy, and integrated the Groq API prompt pipeline to analyze student quiz failures and generate adaptive explanation nodes.",
            "learnings": "Mastered Next.js App Router server component architecture, complex client-side state synchronizations, and how to construct context-rich system prompts for predictable AI responses.",
            "links": "GitHub: github.com/darrellrafa/e-learning  |  Live: e-learning-softeng-project.vercel.app",
            "image_file": "e-learning-1.png"
        },
        {
            "num": "2",
            "title": "Roadmap-AI",
            "tech": "Next.js, Python, SQLite, OpenAI/Gemini API",
            "origin": "Self-initiated / Personal Project",
            "team": "Individual Project",
            "role": "Solo Developer",
            "summary": "An AI-powered learning path generator that instantly designs structured curriculum milestones and study pathways tailored to a user's career track or technical goals.",
            "impact": "Architected the complete system from scratch, creating a responsive React-based node visualizer frontend, a Python API backend, and a local SQLite database to cache generated roadmaps.",
            "learnings": "Gained deep experience in API latency management, crafting JSON-schema-compliant system prompts for deterministic LLM outputs, and managing tree-node hierarchies in client-side state.",
            "links": "GitHub: github.com/darrellrafa/Roadmap-ai",
            "image_file": "roadmap-1.png"
        },
        {
            "num": "3",
            "title": "NutriBot",
            "tech": "Python, SQLite, Fine-tuned LLM",
            "origin": "Coursework (Artificial Intelligence)",
            "team": "Individual Project",
            "role": "Solo Developer",
            "summary": "An AI chatbot assistant designed to simplify nutrition consulting, calorie tracking, and customized meal prep planning based on personalized user health profiles.",
            "impact": "Set up database layers, wrapped REST API endpoints, and fine-tuned LLM hyperparameters to serve accurate and context-aware nutrition plans.",
            "learnings": "Developed skills in LLM fine-tuning methodologies, structuring user health profile databases, and designing accessible, conversational UX flows for wellness tools.",
            "links": "GitHub: github.com/darrellrafa/Nutribot  |  Live: nutribot-testing.vercel.app",
            "image_file": "Nutribot-1.png"
        },
        {
            "num": "4",
            "title": "Design Anything",
            "tech": "Python, Flask, AI Image APIs, HTML/JS",
            "origin": "Self-initiated Project",
            "team": "Group Project (3 Members)",
            "role": "Backend Developer & AI API Integrator",
            "summary": "A web platform integrating advanced image manipulation APIs for AI-driven photo edits like background removal, style transfers, and smart background replacements.",
            "impact": "Designed the Python Flask backend server, integrating external AI model inference pipelines to handle and process image streams in real time.",
            "learnings": "Gained depth in processing binary image data, managing caching for media assets, and resolving external API performance bottle-necks during heavy concurrent loads.",
            "links": "GitHub: github.com/darrellrafa/DesignEverything",
            "image_file": "ds1.jpg"
        },
        {
            "num": "5",
            "title": "Meet & Fight",
            "tech": "Flutter, Appwrite (Backend), Mobile UI",
            "origin": "Self-initiated Project",
            "team": "Group Project (3 Members)",
            "role": "Lead Mobile Developer",
            "summary": "A cross-platform mobile application designed to connect local martial artists, enabling them to find and schedule sparring partners safely.",
            "impact": "Crafted the complete mobile user interface in Flutter and connected user profiles, locations, and matchmaking databases using Appwrite database and real-time triggers.",
            "learnings": "Mastered mobile state management (Provider/Bloc), custom interactive map components, and Appwrite real-time database queries.",
            "links": "GitHub: github.com/darrellrafa/might  |  Live: meetandfight.vercel.app",
            "image_file": "meet1.png"
        }
    ]

    for p in projects:
        # Check space left on page. If too small, break page to avoid cutting off a project header.
        # Estimate 95mm of height per project.
        if pdf.get_y() + 95 > 275:
            pdf.add_page()
            
        # Project Title Header (Pure Black)
        pdf.set_font("Helvetica", "B", 13)
        pdf.set_text_color(0, 0, 0)
        title_text = f"PROJECT #{p['num']}: {p['title']}"
        pdf.cell(0, 8, title_text, new_x="LMARGIN", new_y="NEXT")
        
        # Meta info metadata row (full page width)
        pdf.set_font("Helvetica", "B", 9)
        pdf.set_text_color(55, 65, 81) # Charcoal grey
        pdf.write(5, "Tech Stack: ")
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(31, 41, 55)
        pdf.write(5, f"{p['tech']}   |   ")
        
        pdf.set_font("Helvetica", "B", 9)
        pdf.set_text_color(55, 65, 81)
        pdf.write(5, "Origin: ")
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(31, 41, 55)
        pdf.write(5, f"{p['origin']}\n")
        
        pdf.set_font("Helvetica", "B", 9)
        pdf.set_text_color(55, 65, 81)
        pdf.write(5, "Team: ")
        pdf.set_font("Helvetica", "", 9)
        pdf.set_text_color(31, 41, 55)
        pdf.write(5, f"{p['team']}   |   ")
        
        pdf.set_font("Helvetica", "B", 9)
        pdf.set_text_color(55, 65, 81)
        pdf.write(5, "My Role: ")
        pdf.set_font("Helvetica", "I", 9)
        pdf.set_text_color(0, 0, 0) # Black for role highlight
        pdf.write(5, f"{p['role']}\n")
        
        pdf.ln(2)
        
        content_start_y = pdf.get_y()
        
        # Left Column: Content sections (width 115mm)
        # 1. Summary
        pdf.set_font("Helvetica", "B", 9.5)
        pdf.set_text_color(0, 0, 0) # Black headers
        pdf.cell(115, 5, "Project Summary", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(31, 41, 55)
        pdf.multi_cell(115, 4.5, p['summary'], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)
        
        # 2. My Impact & Role
        pdf.set_font("Helvetica", "B", 9.5)
        pdf.set_text_color(0, 0, 0)
        pdf.cell(115, 5, "My Impact & Contribution", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(31, 41, 55)
        pdf.multi_cell(115, 4.5, p['impact'], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)
        
        # 3. Key Learnings
        pdf.set_font("Helvetica", "B", 9.5)
        pdf.set_text_color(0, 0, 0)
        pdf.cell(115, 5, "Key Learnings", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(31, 41, 55)
        pdf.multi_cell(115, 4.5, p['learnings'], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)
        
        # 4. Links
        pdf.set_font("Helvetica", "B", 9.0)
        pdf.set_text_color(107, 114, 128)
        pdf.cell(115, 5, "Reference Links", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "U", 9.0)
        pdf.set_text_color(31, 41, 55) # Grayscale links (no bright blue)
        pdf.multi_cell(115, 4.5, p['links'], new_x="LMARGIN", new_y="NEXT")
        
        text_end_y = pdf.get_y()
        
        # Right Column: Image Preview (width 60mm)
        image_path = os.path.join("public", "projects", p["image_file"])
        img_h = 33.75 # Default height based on 16:9 aspect ratio for 60mm width
        if os.path.exists(image_path):
            try:
                with Image.open(image_path) as img:
                    orig_w, orig_h = img.size
                    aspect = orig_h / orig_w
                    img_h = 60 * aspect # width is 60mm
                
                # Draw a subtle border around the image area
                pdf.set_draw_color(229, 231, 235)
                pdf.set_line_width(0.3)
                pdf.rect(134.5, content_start_y + 1.5, 61, img_h + 1)
                
                pdf.image(image_path, x=135, y=content_start_y + 2, w=60, h=img_h)
            except Exception as e:
                print(f"Error drawing image {p['image_file']}: {e}")
        else:
            print(f"Warning: Image file not found {image_path}")
            
        # Set Y coordinate for the next project to the maximum of left text and right image height
        next_y = max(text_end_y, content_start_y + 2 + img_h) + 6
        pdf.set_y(next_y)
        
        # Divider line between projects
        pdf.set_draw_color(229, 231, 235) # Very light grey divider
        pdf.set_line_width(0.4)
        pdf.line(15, pdf.get_y(), 195, pdf.get_y())
        pdf.ln(4)
        
    # Output file
    output_filename = "public/DarrellRafaAlamsyah_Portfolio_Academy.pdf"
    os.makedirs(os.path.dirname(output_filename), exist_ok=True)
    pdf.output(output_filename)
    print(f"Portfolio PDF created successfully: {output_filename}")
    
    # Also save a copy in root folder for convenience
    pdf.output("DarrellRafaAlamsyah_Portfolio_Academy.pdf")
    print("Portfolio PDF created successfully in root: DarrellRafaAlamsyah_Portfolio_Academy.pdf")

if __name__ == "__main__":
    create_portfolio()
