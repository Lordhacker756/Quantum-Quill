export default [
    {
        name: "Blog Title Generator",
        description: "Generate SEO-friendly blog titles tailored to your niche",
        category: "Blog",
        aiPrompt: "Generate 5 SEO-friendly blog titles based on the provided niche and outline. Rank them from best to worst, explaining the reasoning. Format the response in rich text.",
        icon: 'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        slug: 'generate-blog-title',
        form: [
            {
                lable: "Enter your niche",
                feild: "input",
                name: "niche",
                required: true,
            },
            {
                lable: "Enter blog outline",
                feild: "input",
                name: "outline",
                required: true,
            }
        ]
    },
    {
        name: "Article Outline Creator",
        description: "Create a detailed outline for your article",
        category: "Writing",
        aiPrompt: "Generate a detailed article outline with main sections and subsections based on the given topic and key points. Format the response in a structured, easy-to-read manner.",
        icon: 'https://cdn-icons-png.flaticon.com/128/2665/2665632.png',
        slug: 'create-article-outline',
        form: [
            {
                lable: "Enter article topic",
                feild: "input",
                name: "topic",
                required: true,
            },
            {
                lable: "Enter key points to cover",
                feild: "textarea",
                name: "keyPoints",
                required: true,
            }
        ]
    },
    {
        name: "Product Description Writer",
        description: "Generate compelling product descriptions",
        category: "E-commerce",
        aiPrompt: "Create an engaging product description of approximately 150 words based on the provided product details. Highlight key features and benefits, and include a call-to-action.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081559.png',
        slug: 'write-product-description',
        form: [
            {
                lable: "Enter product name",
                feild: "input",
                name: "productName",
                required: true,
            },
            {
                lable: "Enter product features",
                feild: "textarea",
                name: "features",
                required: true,
            }
        ]
    },
    {
        name: "Social Media Post Generator",
        description: "Create engaging social media posts",
        category: "Social Media",
        aiPrompt: "Generate 3 engaging social media posts (each under 280 characters) based on the given topic and target audience. Include relevant hashtags.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3938/3938074.png',
        slug: 'generate-social-media-post',
        form: [
            {
                lable: "Enter post topic",
                feild: "input",
                name: "topic",
                required: true,
            },
            {
                lable: "Describe target audience",
                feild: "input",
                name: "audience",
                required: true,
            }
        ]
    },
    {
        name: "Email Subject Line Creator",
        description: "Generate catchy email subject lines",
        category: "Email Marketing",
        aiPrompt: "Create 5 attention-grabbing email subject lines (each under 50 characters) based on the email content and purpose. Rank them from most to least effective, explaining why.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3178/3178158.png',
        slug: 'create-email-subject-line',
        form: [
            {
                lable: "Enter email purpose",
                feild: "input",
                name: "purpose",
                required: true,
            },
            {
                lable: "Summarize email content",
                feild: "textarea",
                name: "content",
                required: true,
            }
        ]
    },
    {
        name: "Meta Description Generator",
        description: "Create SEO-optimized meta descriptions",
        category: "SEO",
        aiPrompt: "Generate an SEO-friendly meta description (maximum 155 characters) for a webpage based on the provided page title and main keywords. Ensure it's compelling and includes a call-to-action.",
        icon: 'https://cdn-icons-png.flaticon.com/128/1378/1378598.png',
        slug: 'generate-meta-description',
        form: [
            {
                lable: "Enter page title",
                feild: "input",
                name: "pageTitle",
                required: true,
            },
            {
                lable: "Enter main keywords",
                feild: "input",
                name: "keywords",
                required: true,
            }
        ]
    },
    {
        name: "FAQ Generator",
        description: "Create a list of frequently asked questions and answers",
        category: "Content",
        aiPrompt: "Generate 5 frequently asked questions and their answers based on the given topic. Ensure the answers are concise, informative, and helpful.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3195/3195751.png',
        slug: 'generate-faq',
        form: [
            {
                lable: "Enter topic",
                feild: "input",
                name: "topic",
                required: true,
            },
            {
                lable: "Provide any specific points to cover",
                feild: "textarea",
                name: "points",
                required: false,
            }
        ]
    },
    {
        name: "Product Name Generator",
        description: "Create catchy and memorable product names",
        category: "Branding",
        aiPrompt: "Generate 5 creative and memorable product names based on the product description and target market. Explain the rationale behind each name.",
        icon: 'https://cdn-icons-png.flaticon.com/128/1170/1170679.png',
        slug: 'generate-product-name',
        form: [
            {
                lable: "Enter product description",
                feild: "textarea",
                name: "description",
                required: true,
            },
            {
                lable: "Describe target market",
                feild: "input",
                name: "targetMarket",
                required: true,
            }
        ]
    },
    {
        name: "Blog Post Conclusion Writer",
        description: "Generate impactful blog post conclusions",
        category: "Blog",
        aiPrompt: "Write a compelling conclusion (approximately 100 words) for a blog post based on the main points covered. Include a brief summary and a call-to-action.",
        icon: 'https://cdn-icons-png.flaticon.com/128/5360/5360837.png',
        slug: 'write-blog-conclusion',
        form: [
            {
                lable: "Enter blog post title",
                feild: "input",
                name: "title",
                required: true,
            },
            {
                lable: "List main points covered",
                feild: "textarea",
                name: "mainPoints",
                required: true,
            }
        ]
    },
    {
        name: "Video Script Outline",
        description: "Create an outline for video scripts",
        category: "Video Content",
        aiPrompt: "Generate a detailed outline for a video script based on the topic and target duration. Include main sections, key points to cover, and suggested visuals or graphics.",
        icon: 'https://cdn-icons-png.flaticon.com/128/1179/1179069.png',
        slug: 'create-video-script-outline',
        form: [
            {
                lable: "Enter video topic",
                feild: "input",
                name: "topic",
                required: true,
            },
            {
                lable: "Enter target duration (in minutes)",
                feild: "input",
                name: "duration",
                required: true,
            }
        ]
    },
    {
        name: "Podcast Episode Summary",
        description: "Generate concise podcast episode summaries",
        category: "Podcasting",
        aiPrompt: "Create a compelling podcast episode summary (approximately 100 words) based on the main topics discussed. Include key takeaways and a teaser to encourage listening.",
        icon: 'https://cdn-icons-png.flaticon.com/128/2628/2628834.png',
        slug: 'generate-podcast-summary',
        form: [
            {
                lable: "Enter episode title",
                feild: "input",
                name: "title",
                required: true,
            },
            {
                lable: "List main topics discussed",
                feild: "textarea",
                name: "topics",
                required: true,
            }
        ]
    },
    {
        name: "Press Release Title Generator",
        description: "Create attention-grabbing press release titles",
        category: "Public Relations",
        aiPrompt: "Generate 5 compelling press release titles (each under 100 characters) based on the key announcement and company information. Rank them from most to least impactful, explaining why.",
        icon: 'https://cdn-icons-png.flaticon.com/128/5154/5154723.png',
        slug: 'generate-press-release-title',
        form: [
            {
                lable: "Enter key announcement",
                feild: "input",
                name: "announcement",
                required: true,
            },
            {
                lable: "Provide company information",
                feild: "textarea",
                name: "companyInfo",
                required: true,
            }
        ]
    },
    {
        name: "Product Feature List Creator",
        description: "Generate comprehensive product feature lists",
        category: "E-commerce",
        aiPrompt: "Create a detailed list of 10 product features and benefits based on the product description. Format each point as a brief, compelling statement.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176298.png',
        slug: 'create-product-feature-list',
        form: [
            {
                lable: "Enter product name",
                feild: "input",
                name: "productName",
                required: true,
            },
            {
                lable: "Provide product description",
                feild: "textarea",
                name: "description",
                required: true,
            }
        ]
    },
    {
        name: "Instagram Caption Generator",
        description: "Create engaging Instagram captions",
        category: "Social Media",
        aiPrompt: "Generate 3 engaging Instagram captions (each under 200 characters) based on the image description and post purpose. Include relevant emojis and hashtags.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3955/3955024.png',
        slug: 'generate-instagram-caption',
        form: [
            {
                lable: "Describe the image",
                feild: "textarea",
                name: "imageDescription",
                required: true,
            },
            {
                lable: "Enter post purpose",
                feild: "input",
                name: "purpose",
                required: true,
            }
        ]
    },
    {
        name: "Newsletter Introduction Writer",
        description: "Create engaging newsletter introductions",
        category: "Email Marketing",
        aiPrompt: "Write an engaging introduction (approximately 100 words) for a newsletter based on the main content and purpose. Include a hook to encourage further reading.",
        icon: 'https://cdn-icons-png.flaticon.com/128/2374/2374449.png',
        slug: 'write-newsletter-intro',
        form: [
            {
                lable: "Enter newsletter topic",
                feild: "input",
                name: "topic",
                required: true,
            },
            {
                lable: "Summarize main content",
                feild: "textarea",
                name: "content",
                required: true,
            }
        ]
    },
    {
        name: "Customer Review Response Generator",
        description: "Create professional responses to customer reviews",
        category: "Customer Service",
        aiPrompt: "Generate a professional and empathetic response (approximately 50-100 words) to a customer review based on the review content and star rating. Address the customer's concerns and highlight the company's commitment to improvement.",
        icon: 'https://cdn-icons-png.flaticon.com/128/1484/1484578.png',
        slug: 'generate-review-response',
        form: [
            {
                lable: "Enter customer review",
                feild: "textarea",
                name: "review",
                required: true,
            },
            {
                lable: "Enter star rating (1-5)",
                feild: "input",
                name: "rating",
                required: true,
            }
        ]
    },
    {
        name: "Job Description Writer",
        description: "Create comprehensive job descriptions",
        category: "Human Resources",
        aiPrompt: "Generate a detailed job description (approximately 250 words) based on the job title, key responsibilities, and required qualifications. Include a brief company description and benefits overview.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135692.png',
        slug: 'write-job-description',
        form: [
            {
                lable: "Enter job title",
                feild: "input",
                name: "jobTitle",
                required: true,
            },
            {
                lable: "List key responsibilities",
                feild: "textarea",
                name: "responsibilities",
                required: true,
            },
            {
                lable: "List required qualifications",
                feild: "textarea",
                name: "qualifications",
                required: true,
            }
        ]
    },
    {
        name: "About Us Page Content Generator",
        description: "Create compelling About Us page content",
        category: "Website Content",
        aiPrompt: "Generate engaging content (approximately 200 words) for an About Us page based on the company history, mission, and values. Include a brief overview of products or services and a call-to-action.",
        icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281869.png',
        slug: 'generate-about-us-content',
        form: [
            {
                lable: "Enter company name",
                feild: "input",
                name: "companyName",
                required: true,
            },
            {
                lable: "Provide company history and mission",
                feild: "textarea",
                name: "history",
                required: true,
            },
            {
                lable: "List core values",
                feild: "textarea",
                name: "values",
                required: true,
            }
        ]
    },
    {
        name: "Event Description Writer",
        description: "Create engaging event descriptions",
        category: "Event Planning",
        aiPrompt: "Generate an engaging event description (approximately 150 words) based on the event type, date, location, and key highlights. Include a call-to-action for registration or ticket purchase.",
        icon: 'https://cdn-icons-png.flaticon.com/128/2693/2693507.png',
        slug: 'write-event-description',
        form: [
            {
                lable: "Enter event name",
                feild: "input",
                name: "eventName",
                required: true,
            },
            {
                lable: "Enter event date and location",
                feild: "input",
                name: "dateLocation",
                required: true,
            },
            {
                lable: "List key event highlights",
                feild: "textarea",
                name: "highlights",
                required: true,
            }
        ]
    },
    {
        name: "How-To Guide Outline Creator",
        description: "Generate outlines for how-to guides",
        category: "Content",
    }
]