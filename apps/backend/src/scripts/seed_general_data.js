import prisma from "../config/prisma.config.js";

/**
 * VedEngine General Knowledge Database Seeder
 * =============================================
 * Directly inserts 200+ curated knowledge entries into the Document table.
 * Each entry includes:
 *   - title: The page/topic name
 *   - content: Detailed text content for vector search matching
 *   - description: Short summary
 *   - url: Real website link (Wikipedia, official sites) for redirect on click
 *   - fileType: "WEB" (website link type)
 *
 * No third-party scraping libraries needed. Pure Prisma database insert.
 *
 * Usage: node src/scripts/seed_general_data.js
 */

const GENERAL_DATA = [
    // ═══════════════════════════════════════════════════════════════════════
    // TECHNOLOGY & PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Artificial Intelligence - AI",
        content: "Artificial intelligence (AI) is the simulation of human intelligence processes by computer systems. These processes include learning, reasoning, and self-correction. AI encompasses machine learning, deep learning, natural language processing, computer vision, and robotics. Modern AI applications include virtual assistants like Siri and Alexa, autonomous vehicles, recommendation systems used by Netflix and YouTube, medical diagnosis tools, and language models like GPT and Gemini. AI was founded as an academic discipline in 1956. The field has experienced several waves of optimism, followed by disappointment and loss of funding, but has seen tremendous growth since 2012 with the rise of deep learning and large language models.",
        description: "Artificial intelligence is the simulation of human intelligence by computer systems including learning, reasoning, and self-correction.",
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    },
    {
        title: "Machine Learning",
        content: "Machine learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It focuses on the development of algorithms that can access data and use it to learn for themselves. The process begins with observations or data, such as examples, direct experience, or instruction, to look for patterns in data and make better decisions in the future. Types include supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning. Popular algorithms include linear regression, decision trees, random forests, support vector machines, neural networks, and gradient boosting. Machine learning is used in spam filtering, image recognition, speech recognition, medical diagnosis, and financial trading.",
        description: "Machine learning enables systems to automatically learn and improve from experience without explicit programming.",
        url: "https://en.wikipedia.org/wiki/Machine_learning",
    },
    {
        title: "JavaScript Programming Language",
        content: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a multi-paradigm language supporting event-driven, functional, and imperative programming styles. JavaScript was initially created by Brendan Eich at Netscape in 1995 in just 10 days. It is one of the core technologies of the World Wide Web alongside HTML and CSS. Over 98% of websites use JavaScript on the client side for web page behavior. JavaScript engines like V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari) execute the code. Node.js allows JavaScript to run on servers. Modern frameworks include React, Angular, Vue.js, Next.js, and Svelte. JavaScript supports features like closures, prototypal inheritance, async/await, promises, generators, modules, and destructuring.",
        description: "JavaScript is a high-level programming language and one of the core technologies of the World Wide Web.",
        url: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
        title: "Python Programming Language",
        content: "Python is a high-level, general-purpose programming language created by Guido van Rossum and first released in 1991. Its design philosophy emphasizes code readability with the use of significant indentation. Python supports multiple programming paradigms including structured, object-oriented, and functional programming. It is often described as a batteries included language due to its comprehensive standard library. Python is widely used in web development (Django, Flask, FastAPI), data science (Pandas, NumPy, Matplotlib), machine learning (TensorFlow, PyTorch, scikit-learn), automation, scripting, and scientific computing. Python consistently ranks among the top programming languages in popularity indices like TIOBE and Stack Overflow surveys.",
        description: "Python is a high-level general-purpose programming language emphasizing code readability and versatility.",
        url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
    {
        title: "React JavaScript Library",
        content: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It was created by Jordan Walke, a software engineer at Meta (Facebook), and was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. React allows developers to create large web applications that can change data without reloading the page. Its key features include the virtual DOM for performance optimization, JSX syntax for writing HTML-like code in JavaScript, component-based architecture for reusability, unidirectional data flow, and hooks for state management. React is maintained by Meta and a community of individual developers and companies. It is used by Facebook, Instagram, Netflix, Airbnb, Uber, and many other major companies.",
        description: "React is a free open-source JavaScript library for building user interfaces based on reusable components.",
        url: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
        title: "Node.js Runtime Environment",
        content: "Node.js is an open-source, cross-platform JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It was created by Ryan Dahl in 2009. Node.js lets developers use JavaScript to write server-side scripts and command-line tools. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. The Node.js package ecosystem npm is the largest ecosystem of open-source libraries in the world with over 2 million packages. Node.js is used by companies like Netflix, PayPal, LinkedIn, Walmart, and Uber for building scalable network applications, REST APIs, microservices, and real-time chat applications.",
        description: "Node.js is an open-source JavaScript runtime that executes JavaScript outside web browsers using the V8 engine.",
        url: "https://en.wikipedia.org/wiki/Node.js",
    },
    {
        title: "Cloud Computing",
        content: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center. Cloud computing relies on sharing of resources to achieve coherence and typically uses a pay-as-you-go model. The three main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Major cloud providers include Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), IBM Cloud, and Oracle Cloud. Cloud computing enables scalability, cost savings, performance optimization, security, and global accessibility for businesses of all sizes.",
        description: "Cloud computing provides on-demand computer resources including storage and computing power over the internet.",
        url: "https://en.wikipedia.org/wiki/Cloud_computing",
    },
    {
        title: "Blockchain Technology",
        content: "A blockchain is a distributed, immutable ledger that facilitates the process of recording transactions and tracking assets in a network. An asset can be tangible (a house, car, cash) or intangible (intellectual property, patents, copyrights, branding). Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant's ledger. Blockchain was invented by Satoshi Nakamoto in 2008 to serve as the public distributed ledger for Bitcoin cryptocurrency transactions. Key concepts include decentralization, consensus mechanisms (Proof of Work, Proof of Stake), smart contracts, mining, and cryptographic hashing. Blockchain is used in cryptocurrency, supply chain management, voting systems, healthcare records, and decentralized finance (DeFi).",
        description: "Blockchain is a distributed immutable ledger technology for recording transactions across a network.",
        url: "https://en.wikipedia.org/wiki/Blockchain",
    },
    {
        title: "Cybersecurity",
        content: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. Implementing effective cybersecurity measures is particularly challenging because there are more devices than people, and attackers are becoming more innovative. Key areas include network security, application security, information security, operational security, disaster recovery, and end-user education. Common threats include malware, ransomware, phishing, social engineering, SQL injection, man-in-the-middle attacks, and denial-of-service attacks. Organizations use firewalls, encryption, multi-factor authentication, intrusion detection systems, and security information and event management (SIEM) tools.",
        description: "Cybersecurity protects computer systems, networks, and programs from digital attacks and unauthorized access.",
        url: "https://en.wikipedia.org/wiki/Computer_security",
    },
    {
        title: "Deep Learning Neural Networks",
        content: "Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised, or unsupervised. Deep-learning architectures such as deep neural networks, recurrent neural networks (RNNs), long short-term memory (LSTM), convolutional neural networks (CNNs), and transformers have been applied to fields including natural language processing, speech recognition, computer vision, machine translation, bioinformatics, drug design, medical image analysis, and board game programs. Deep learning has produced results comparable to or superior to human experts in many domains. Key frameworks include TensorFlow, PyTorch, Keras, and JAX. The transformer architecture, introduced in 2017, revolutionized NLP and led to large language models like GPT, BERT, and Gemini.",
        description: "Deep learning uses artificial neural networks with multiple layers to learn representations from data.",
        url: "https://en.wikipedia.org/wiki/Deep_learning",
    },
    {
        title: "Database Management Systems",
        content: "A database is an organized collection of structured information or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Types include relational databases (MySQL, PostgreSQL, Oracle, SQL Server), NoSQL databases (MongoDB, Cassandra, Redis, CouchDB), graph databases (Neo4j), time-series databases (InfluxDB), and vector databases (Pinecone, Weaviate, Milvus). SQL (Structured Query Language) is the standard language for relational database management. Key concepts include ACID properties, normalization, indexing, joins, transactions, replication, sharding, and backup strategies. Modern applications use ORMs like Prisma, Sequelize, and TypeORM to interact with databases programmatically.",
        description: "Database management systems organize, store, and retrieve structured data electronically.",
        url: "https://en.wikipedia.org/wiki/Database",
    },
    {
        title: "Git Version Control System",
        content: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel. Key concepts include repositories, commits, branches, merging, rebasing, pull requests, and tags. Git enables multiple developers to work on the same codebase simultaneously without conflicts. GitHub, GitLab, and Bitbucket are popular hosting platforms for Git repositories. Git commands include git init, git clone, git add, git commit, git push, git pull, git branch, git merge, git rebase, git stash, and git log. Git is the most widely used version control system in the world.",
        description: "Git is a distributed version control system for tracking changes in source code during development.",
        url: "https://en.wikipedia.org/wiki/Git",
    },
    {
        title: "Linux Operating System",
        content: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged as a Linux distribution which includes the kernel and supporting system software and libraries. Popular distributions include Ubuntu, Fedora, Debian, CentOS, Arch Linux, and Linux Mint. Linux is used in servers, mainframes, supercomputers, embedded systems, smartphones (Android), and desktop computers. It powers over 90% of all web servers and all of the world's top 500 supercomputers. Linux offers security, stability, flexibility, and is free to use. The Linux command line interface provides powerful tools for system administration, scripting, and automation.",
        description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
        url: "https://en.wikipedia.org/wiki/Linux",
    },
    {
        title: "API - Application Programming Interface",
        content: "An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface, offering a service to other pieces of software. APIs define the kinds of calls or requests that can be made, how to make them, the data formats that should be used, and the conventions to follow. Types include REST APIs, GraphQL, SOAP, gRPC, and WebSocket APIs. REST (Representational State Transfer) is the most common API architecture using HTTP methods (GET, POST, PUT, DELETE). APIs use JSON or XML for data exchange. Authentication methods include API keys, OAuth 2.0, JWT tokens, and Basic Auth. Popular API tools include Postman, Swagger, and Insomnia.",
        description: "An API enables communication between software programs through defined protocols and data formats.",
        url: "https://en.wikipedia.org/wiki/API",
    },
    {
        title: "Docker Containerization",
        content: "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files. Docker was first released in 2013 by Docker Inc. Key concepts include images, containers, Dockerfile, Docker Compose, Docker Hub, volumes, and networks. Docker enables developers to package applications with all dependencies into a standardized unit for software development. Benefits include consistency across environments, isolation, scalability, and rapid deployment. Docker is widely used with Kubernetes for container orchestration. Docker Compose allows defining multi-container applications in a single YAML file.",
        description: "Docker uses OS-level virtualization to deliver software in isolated packages called containers.",
        url: "https://en.wikipedia.org/wiki/Docker_(software)",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SCIENCE & MATHEMATICS
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Physics - Study of Matter and Energy",
        content: "Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, and its main goal is to understand how the universe behaves. Major branches include classical mechanics, thermodynamics, electromagnetism, optics, quantum mechanics, relativity, nuclear physics, and particle physics. Key figures include Isaac Newton, Albert Einstein, Niels Bohr, Richard Feynman, Stephen Hawking, and Marie Curie. Physics has led to groundbreaking discoveries including gravity, electromagnetic waves, the photoelectric effect, nuclear fission, the Higgs boson, and gravitational waves. Applications include electronics, telecommunications, nuclear energy, medical imaging, and space exploration.",
        description: "Physics is the natural science studying matter, energy, motion, and the fundamental forces of the universe.",
        url: "https://en.wikipedia.org/wiki/Physics",
    },
    {
        title: "Quantum Mechanics",
        content: "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science. Key principles include wave-particle duality, the uncertainty principle (Heisenberg), superposition, quantum entanglement, and quantum tunneling. The Schrödinger equation describes how the quantum state of a physical system changes over time. Quantum computing leverages quantum mechanical phenomena to perform computations exponentially faster than classical computers for certain problems. Companies like IBM, Google, Microsoft, and startups like IonQ and Rigetti are developing quantum computers.",
        description: "Quantum mechanics describes the behavior of matter and energy at atomic and subatomic scales.",
        url: "https://en.wikipedia.org/wiki/Quantum_mechanics",
    },
    {
        title: "Theory of Relativity - Einstein",
        content: "The theory of relativity usually encompasses two interrelated theories by Albert Einstein: special relativity (1905) and general relativity (1915). Special relativity applies to all physical phenomena in the absence of gravity and states that the laws of physics are the same for all non-accelerating observers, and the speed of light in a vacuum is the same for all observers regardless of their relative motion. The famous equation E=mc² shows that mass and energy are interchangeable. General relativity is a theory of gravitation that describes gravity not as a force but as a curvature of spacetime caused by mass and energy. General relativity has been confirmed through experiments including gravitational lensing, the precession of Mercury's orbit, gravitational time dilation, and the detection of gravitational waves by LIGO in 2015.",
        description: "Einstein's theory of relativity describes the relationship between space, time, gravity, mass, and energy.",
        url: "https://en.wikipedia.org/wiki/Theory_of_relativity",
    },
    {
        title: "DNA - Deoxyribonucleic Acid",
        content: "Deoxyribonucleic acid (DNA) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix. It carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms and many viruses. DNA was first isolated by Friedrich Miescher in 1869. Its double helix structure was discovered by James Watson and Francis Crick in 1953, based on X-ray crystallography work by Rosalind Franklin. DNA is made up of four nucleotide bases: adenine (A), thymine (T), guanine (G), and cytosine (C). The human genome contains approximately 3 billion base pairs and about 20,000-25,000 protein-coding genes. Applications include genetic testing, forensics, gene therapy, CRISPR gene editing, ancestry tracing, and personalized medicine.",
        description: "DNA is the molecule carrying genetic instructions for development and reproduction of all living organisms.",
        url: "https://en.wikipedia.org/wiki/DNA",
    },
    {
        title: "Climate Change and Global Warming",
        content: "Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil, and gas, which produce heat-trapping greenhouse gases. Key greenhouse gases include carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O). Effects include rising global temperatures, melting ice caps and glaciers, rising sea levels, more frequent extreme weather events, ocean acidification, and biodiversity loss. The Paris Agreement (2015) aims to limit global warming to 1.5°C above pre-industrial levels. Solutions include renewable energy adoption, electric vehicles, carbon capture, reforestation, energy efficiency improvements, and sustainable agriculture.",
        description: "Climate change refers to long-term shifts in global temperatures primarily driven by human activities.",
        url: "https://en.wikipedia.org/wiki/Climate_change",
    },
    {
        title: "Solar System - Planets and Space",
        content: "The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The eight planets in order from the Sun are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. The inner solar system includes the four terrestrial planets (rocky). The outer solar system includes the four gas and ice giants. The Solar System also contains dwarf planets (Pluto, Eris, Ceres), moons, asteroids, comets, and the Kuiper Belt. Jupiter is the largest planet with a mass more than twice that of all other planets combined. Earth is the only planet known to harbor life. Mars is the primary target for future human colonization efforts by NASA and SpaceX.",
        description: "The Solar System consists of the Sun, eight planets, dwarf planets, moons, asteroids, and comets.",
        url: "https://en.wikipedia.org/wiki/Solar_System",
    },
    {
        title: "Mathematics - The Language of Science",
        content: "Mathematics is an area of knowledge that includes the study of numbers, formulas, shapes, spaces, and quantities. Major branches include arithmetic, algebra, geometry, trigonometry, calculus, statistics, probability, linear algebra, number theory, topology, and discrete mathematics. Mathematics is essential in many fields including natural science, engineering, medicine, finance, computer science, and social sciences. Key historical figures include Euclid, Archimedes, Isaac Newton, Gottfried Leibniz, Carl Friedrich Gauss, Leonhard Euler, Srinivasa Ramanujan, and Alan Turing. Applied mathematics includes mathematical physics, mathematical biology, control theory, optimization, and numerical analysis. Pure mathematics studies abstract concepts without concern for practical applications.",
        description: "Mathematics is the study of numbers, formulas, shapes, spaces, quantities, and their relationships.",
        url: "https://en.wikipedia.org/wiki/Mathematics",
    },
    {
        title: "Black Holes in Space",
        content: "A black hole is a region of spacetime where gravity is so strong that nothing, not even light or other electromagnetic waves, has enough energy to escape the event horizon. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. Types include stellar black holes (formed from collapsing stars), supermassive black holes (found at the centers of galaxies, millions to billions of solar masses), intermediate black holes, and primordial black holes. The first image of a black hole was captured by the Event Horizon Telescope in 2019, showing the supermassive black hole at the center of galaxy M87. Sagittarius A* is the supermassive black hole at the center of the Milky Way galaxy. Black holes emit Hawking radiation, a theoretical prediction by Stephen Hawking.",
        description: "Black holes are regions of spacetime with gravity so strong that nothing can escape, not even light.",
        url: "https://en.wikipedia.org/wiki/Black_hole",
    },
    {
        title: "Evolution and Natural Selection",
        content: "Evolution is change in the heritable characteristics of biological populations over successive generations. These characteristics are the expressions of genes, which are passed from parent to offspring during reproduction. Charles Darwin published On the Origin of Species in 1859, proposing the theory of evolution by natural selection. Natural selection is the process where organisms with favorable traits are more likely to reproduce. Key concepts include genetic variation, mutation, gene flow, genetic drift, speciation, adaptation, and common descent. Evidence for evolution comes from the fossil record, comparative anatomy, molecular biology, biogeography, and direct observation. All life on Earth shares a common ancestor that lived approximately 3.5 to 3.8 billion years ago.",
        description: "Evolution describes changes in heritable characteristics of populations over generations through natural selection.",
        url: "https://en.wikipedia.org/wiki/Evolution",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // HISTORY
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "World War II - 1939 to 1945",
        content: "World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries forming two opposing military alliances: the Allies (United States, United Kingdom, Soviet Union, China, France) and the Axis (Nazi Germany, Imperial Japan, Fascist Italy). It was the deadliest conflict in human history, resulting in 70 to 85 million fatalities. Key events include the invasion of Poland (1939), the Battle of Britain, Pearl Harbor attack (1941), D-Day Normandy landings (1944), the Battle of Stalingrad, the Holocaust, the atomic bombings of Hiroshima and Nagasaki (1945), and the fall of Berlin. The war ended with the unconditional surrender of Germany in May 1945 and Japan in September 1945. The United Nations was established in 1945 to prevent future conflicts.",
        description: "World War II (1939-1945) was the deadliest global conflict involving the Allies against the Axis powers.",
        url: "https://en.wikipedia.org/wiki/World_War_II",
    },
    {
        title: "Ancient Rome - Roman Empire",
        content: "Ancient Rome refers to the civilization that began on the Italian Peninsula as early as the 8th century BC. The Roman Kingdom, Roman Republic, and Roman Empire collectively spanned a period of over 1,200 years. At its greatest extent under Trajan (117 AD), the Roman Empire covered approximately 5 million square kilometers. Key contributions include Roman law (basis of many legal systems today), engineering (aqueducts, roads, the Colosseum, Pantheon), Latin language (root of Romance languages), republican government, military organization, and infrastructure. Notable figures include Julius Caesar, Augustus, Nero, Marcus Aurelius, and Constantine. The Western Roman Empire fell in 476 AD, while the Eastern Roman Empire (Byzantine Empire) continued until 1453 AD.",
        description: "Ancient Rome was a civilization spanning over 1,200 years that profoundly influenced Western culture and law.",
        url: "https://en.wikipedia.org/wiki/Ancient_Rome",
    },
    {
        title: "Industrial Revolution",
        content: "The Industrial Revolution was the transition to new manufacturing processes in Great Britain, continental Europe, and the United States from about 1760 to 1820-1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of water power and steam power, the development of machine tools, and the rise of the mechanized factory system. Key inventions include the spinning jenny, the steam engine (James Watt), the power loom, and the cotton gin. The Industrial Revolution led to urbanization, the growth of the middle class, labor movements, and significant changes in transportation (railways, steamships). It marked a major turning point in human history and fundamentally changed economies, demographics, and social structures worldwide.",
        description: "The Industrial Revolution was the transition from hand production to machine manufacturing starting around 1760.",
        url: "https://en.wikipedia.org/wiki/Industrial_Revolution",
    },
    {
        title: "Space Exploration - NASA and Beyond",
        content: "Space exploration is the use of astronomy and space technology to explore outer space. The Space Age began with the launch of Sputnik 1 by the Soviet Union in 1957. Major milestones include Yuri Gagarin becoming the first human in space (1961), the Apollo 11 Moon landing with Neil Armstrong and Buzz Aldrin (1969), the Space Shuttle program (1981-2011), the International Space Station (ISS, 1998-present), Mars rovers (Spirit, Opportunity, Curiosity, Perseverance), the Hubble Space Telescope, and the James Webb Space Telescope (2021). SpaceX, founded by Elon Musk, has revolutionized space travel with reusable rockets (Falcon 9, Starship). NASA's Artemis program aims to return humans to the Moon. Future goals include human missions to Mars and establishing permanent lunar bases.",
        description: "Space exploration uses astronomy and technology to explore outer space, from the Moon to Mars and beyond.",
        url: "https://en.wikipedia.org/wiki/Space_exploration",
    },
    {
        title: "India - Republic of India",
        content: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the most populous country as of June 2023, and the most populous democracy in the world. India is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast. India's capital is New Delhi and its largest city is Mumbai. India has a rich history spanning over 5,000 years, including the Indus Valley Civilization, the Maurya and Gupta empires, the Mughal Empire, and British colonial rule. India gained independence on August 15, 1947. India has a diverse culture with 22 officially recognized languages, multiple religions (Hinduism, Islam, Christianity, Sikhism, Buddhism, Jainism), and the world's fifth-largest economy by nominal GDP. India is a nuclear power and a member of BRICS, G20, and the United Nations.",
        description: "India is the world's most populous democracy, with a rich 5,000-year history and diverse culture.",
        url: "https://en.wikipedia.org/wiki/India",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // BUSINESS & ECONOMY
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Cryptocurrency and Bitcoin",
        content: "A cryptocurrency is a digital or virtual currency secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology. Bitcoin, created by Satoshi Nakamoto in 2009, was the first decentralized cryptocurrency. Other major cryptocurrencies include Ethereum (smart contracts platform), Binance Coin, Cardano, Solana, XRP (Ripple), Dogecoin, and Polkadot. Cryptocurrencies can be bought on exchanges like Coinbase, Binance, and Kraken. Key concepts include mining, wallets, private keys, public keys, decentralized finance (DeFi), non-fungible tokens (NFTs), and stablecoins. The total cryptocurrency market capitalization has exceeded $2 trillion. Governments worldwide are developing regulations and exploring central bank digital currencies (CBDCs).",
        description: "Cryptocurrency is digital currency secured by cryptography, with Bitcoin being the first and most well-known.",
        url: "https://en.wikipedia.org/wiki/Cryptocurrency",
    },
    {
        title: "Stock Market and Investing",
        content: "A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks, which represent ownership claims on businesses. Major stock exchanges include the New York Stock Exchange (NYSE), NASDAQ, London Stock Exchange (LSE), Tokyo Stock Exchange, Shanghai Stock Exchange, and Bombay Stock Exchange (BSE). Key indices include the S&P 500, Dow Jones Industrial Average, NASDAQ Composite, FTSE 100, Nikkei 225, and SENSEX. Investing strategies include value investing, growth investing, dividend investing, index fund investing, and day trading. Key concepts include market capitalization, price-to-earnings ratio, dividends, bonds, mutual funds, ETFs (exchange-traded funds), IPOs (initial public offerings), and portfolio diversification. Notable investors include Warren Buffett, Peter Lynch, and Ray Dalio.",
        description: "Stock markets are exchanges where buyers and sellers trade stocks representing ownership in businesses.",
        url: "https://en.wikipedia.org/wiki/Stock_market",
    },
    {
        title: "Entrepreneurship and Startups",
        content: "Entrepreneurship is the creation or extraction of economic value through the development of new businesses, products, or services. An entrepreneur is an individual who creates a new business, bearing most of the risks and enjoying most of the rewards. The startup ecosystem includes venture capital funding, angel investors, incubators, accelerators (Y Combinator, Techstars), and initial public offerings. Key concepts include business models, minimum viable product (MVP), product-market fit, growth hacking, lean startup methodology, and scaling. Famous entrepreneurs include Steve Jobs (Apple), Bill Gates (Microsoft), Jeff Bezos (Amazon), Mark Zuckerberg (Meta), Elon Musk (Tesla, SpaceX), and Larry Page & Sergey Brin (Google). Silicon Valley in California is the world's most famous startup hub.",
        description: "Entrepreneurship involves creating new businesses, products, or services while bearing risks for potential rewards.",
        url: "https://en.wikipedia.org/wiki/Entrepreneurship",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // HEALTH & MEDICINE
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Human Brain - Neuroscience",
        content: "The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system. The brain consists of the cerebrum, the brainstem, and the cerebellum. It weighs approximately 1.4 kg (3 pounds) and contains roughly 86 billion neurons. The brain controls most of the activities of the body, processing, integrating, and coordinating information received from the sense organs, and making decisions as to the instructions sent to the rest of the body. Key areas include the frontal lobe (reasoning, planning), temporal lobe (memory, language), parietal lobe (spatial awareness), and occipital lobe (vision). Neuroscience studies the structure and function of the nervous system. Brain-computer interfaces, neuroplasticity, and artificial neural networks are active areas of research.",
        description: "The human brain is the central organ of the nervous system containing 86 billion neurons.",
        url: "https://en.wikipedia.org/wiki/Human_brain",
    },
    {
        title: "Vaccines and Immunization",
        content: "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins. Edward Jenner developed the first vaccine (smallpox) in 1796. Key vaccine types include live attenuated, inactivated, subunit, toxoid, viral vector, and mRNA vaccines. mRNA vaccines (Pfizer-BioNTech and Moderna) were developed for COVID-19 in record time. Vaccines have eradicated smallpox and nearly eradicated polio. The WHO's Expanded Programme on Immunization targets diseases including measles, diphtheria, tetanus, pertussis, tuberculosis, and hepatitis B. Vaccine development typically takes 10-15 years but was accelerated during the COVID-19 pandemic.",
        description: "Vaccines are biological preparations providing immunity to infectious diseases through various technologies.",
        url: "https://en.wikipedia.org/wiki/Vaccine",
    },
    {
        title: "Mental Health and Psychology",
        content: "Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life. Common mental health disorders include depression, anxiety disorders, bipolar disorder, schizophrenia, PTSD (post-traumatic stress disorder), OCD (obsessive-compulsive disorder), ADHD (attention-deficit/hyperactivity disorder), and eating disorders. Treatment approaches include psychotherapy (cognitive behavioral therapy, dialectical behavior therapy), medication (antidepressants, anti-anxiety medications), lifestyle changes, mindfulness, and support groups. The WHO estimates that 1 in 4 people will be affected by mental or neurological disorders at some point in their lives.",
        description: "Mental health encompasses emotional, psychological, and social well-being affecting thoughts and behavior.",
        url: "https://en.wikipedia.org/wiki/Mental_health",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // FAMOUS PEOPLE
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Albert Einstein - Theoretical Physicist",
        content: "Albert Einstein (1879-1955) was a German-born theoretical physicist who is widely held to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity (special and general), but he also made important contributions to the development of the theory of quantum mechanics. His mass-energy equivalence formula E=mc² has been called the world's most famous equation. He received the Nobel Prize in Physics in 1921 for his discovery of the law of the photoelectric effect. Einstein published more than 300 scientific papers and more than 150 non-scientific works. He emigrated to the United States in 1933 and joined the Institute for Advanced Study in Princeton, New Jersey. Einstein's work profoundly influenced the philosophy of science.",
        description: "Albert Einstein was a theoretical physicist known for the theory of relativity and E=mc².",
        url: "https://en.wikipedia.org/wiki/Albert_Einstein",
    },
    {
        title: "Elon Musk - Technology Entrepreneur",
        content: "Elon Reeve Musk is a businessman known for his key roles in space company SpaceX and electric vehicle maker Tesla Inc. Musk is the wealthiest person in the world. He is also the founder of The Boring Company, co-founder of Neuralink and OpenAI, and the owner and CTO of X (formerly Twitter). Born in South Africa, Musk moved to Canada at age 17 and later to the United States. He co-founded the web software company Zip2, which was acquired for $307 million. He then founded X.com, which later became PayPal, sold to eBay for $1.5 billion. SpaceX has developed the reusable Falcon 9 rocket and the Starship spacecraft aimed at Mars colonization. Tesla produces electric vehicles, battery energy storage, solar panels, and solar roof tiles. Musk's stated goal is to make humanity a multi-planetary species.",
        description: "Elon Musk is an entrepreneur known for leading SpaceX, Tesla, Neuralink, and X (Twitter).",
        url: "https://en.wikipedia.org/wiki/Elon_Musk",
    },
    {
        title: "Mahatma Gandhi - Father of the Nation",
        content: "Mohandas Karamchand Gandhi (1869-1948), popularly known as Mahatma Gandhi, was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. Gandhi first employed nonviolent civil disobedience as an expatriate lawyer in South Africa. After his return to India in 1915, he organized peasants, farmers, and urban laborers to protest against excessive land-tax and discrimination. Key movements include the Non-Cooperation Movement (1920), the Salt March/Dandi March (1930), and the Quit India Movement (1942). Gandhi's philosophy of nonviolence (ahimsa) and truth (satyagraha) influenced leaders like Martin Luther King Jr. and Nelson Mandela. India celebrates his birthday, October 2, as Gandhi Jayanti.",
        description: "Mahatma Gandhi led India's independence movement through nonviolent civil disobedience.",
        url: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
    },
    {
        title: "Steve Jobs - Apple Co-Founder",
        content: "Steven Paul Jobs (1955-2011) was an American business magnate, inventor, and investor. He was the co-founder, chairman, and CEO of Apple Inc.; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution and for his influential career in the computer and consumer electronics fields. He co-founded Apple with Steve Wozniak and Ronald Wayne in 1976. Under Jobs' leadership, Apple introduced revolutionary products including the Macintosh, iPod, iPhone, iPad, iTunes, App Store, and MacBook. Jobs was known for his emphasis on design, user experience, and product simplicity. He passed away on October 5, 2011, from pancreatic cancer.",
        description: "Steve Jobs co-founded Apple and revolutionized personal computing, music, phones, and tablets.",
        url: "https://en.wikipedia.org/wiki/Steve_Jobs",
    },
    {
        title: "Leonardo da Vinci - Renaissance Genius",
        content: "Leonardo di ser Piero da Vinci (1452-1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety of subjects including anatomy, astronomy, botany, cartography, painting, and paleontology. Leonardo is widely considered one of the greatest painters of all time. His most famous paintings include the Mona Lisa (Louvre Museum, Paris) and The Last Supper. He conceptualized flying machines, concentrated solar power, armored fighting vehicles, and calculating machines. Only 15 of his paintings survive, but his notebooks contain over 7,000 pages of writings and drawings.",
        description: "Leonardo da Vinci was a Renaissance polymath known for the Mona Lisa and groundbreaking inventions.",
        url: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // TECH COMPANIES
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Google - Search Engine and Technology Company",
        content: "Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics. Founded in 1998 by Larry Page and Sergey Brin while they were PhD students at Stanford University. Google is the world's most-used search engine, processing over 8.5 billion searches per day. Google's parent company is Alphabet Inc. Key products and services include Google Search, Gmail, Google Maps, YouTube, Google Cloud Platform, Android, Chrome browser, Google Drive, Google Workspace, Google Photos, and Google Ads. Google's AI projects include DeepMind, Google Brain, Gemini (AI model), and TensorFlow. Google's motto was formerly 'Don't be evil.' The company is headquartered in Mountain View, California.",
        description: "Google is the world's most-used search engine and a leading technology company founded in 1998.",
        url: "https://en.wikipedia.org/wiki/Google",
    },
    {
        title: "Apple Inc. - Technology and Consumer Electronics",
        content: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple is the world's largest technology company by revenue and the world's most valuable company. Founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976, Apple revolutionized personal technology with products including the Mac, iPod, iPhone, iPad, Apple Watch, AirPods, Apple TV, and Vision Pro. Apple's software ecosystem includes macOS, iOS, iPadOS, watchOS, and tvOS. Services include the App Store, Apple Music, Apple TV+, iCloud, Apple Pay, and Apple Fitness+. Apple's custom silicon chips (M1, M2, M3, M4) power its Mac and iPad products. The company is known for its emphasis on design, user experience, privacy, and tight integration between hardware and software. Apple's market capitalization has exceeded $3 trillion.",
        description: "Apple is the world's most valuable technology company, known for iPhone, Mac, and innovative design.",
        url: "https://en.wikipedia.org/wiki/Apple_Inc.",
    },
    {
        title: "Microsoft Corporation",
        content: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975. It is the world's largest software maker by revenue and one of the most valuable companies globally. Key products include Windows (operating system used by over 1 billion devices), Microsoft Office/Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams), Azure (cloud computing platform), LinkedIn, GitHub, Xbox gaming platform, Surface devices, and Bing search engine. Microsoft invested $13 billion in OpenAI and integrated AI capabilities (Copilot) across its products. Under CEO Satya Nadella (since 2014), Microsoft has focused on cloud computing and AI, making Azure the second-largest cloud platform after AWS.",
        description: "Microsoft is the world's largest software maker, known for Windows, Office, Azure, and AI investments.",
        url: "https://en.wikipedia.org/wiki/Microsoft",
    },
    {
        title: "GitHub - Software Development Platform",
        content: "GitHub is a developer platform that allows developers to create, store, manage, and share their code. It uses Git distributed version control. GitHub provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. As of 2023, GitHub reports having over 100 million developers and more than 372 million repositories, making it the largest source code host. GitHub was founded in 2008 by Tom Preston-Werner, Chris Wanstrath, P. J. Hyett, and Scott Chacon. Microsoft acquired GitHub in 2018 for $7.5 billion. Key features include repositories, pull requests, issues, GitHub Actions (CI/CD), GitHub Pages, GitHub Copilot (AI pair programmer), GitHub Codespaces, and GitHub Discussions.",
        description: "GitHub is the world's largest code hosting platform with 100+ million developers and 372+ million repositories.",
        url: "https://en.wikipedia.org/wiki/GitHub",
    },
    {
        title: "OpenAI - Artificial Intelligence Research",
        content: "OpenAI is an American artificial intelligence research organization founded in December 2015 by Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever, Wojciech Zaremba, and John Schulman. OpenAI's mission is to ensure that artificial general intelligence (AGI) benefits all of humanity. OpenAI developed GPT (Generative Pre-trained Transformer) series of large language models including GPT-3, GPT-4, and GPT-4o. ChatGPT, launched in November 2022, became the fastest-growing consumer application in history, reaching 100 million users in two months. Other products include DALL-E (image generation), Whisper (speech recognition), Codex (code generation), and the OpenAI API. OpenAI transitioned from a nonprofit to a capped-profit company in 2019. Microsoft invested over $13 billion in OpenAI.",
        description: "OpenAI is an AI research organization that developed ChatGPT, GPT-4, and DALL-E.",
        url: "https://en.wikipedia.org/wiki/OpenAI",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SPORTS
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Cricket - Sport",
        content: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end. Each wicket comprises two bails balanced on three stumps. The game proceeds when a player on the fielding team bowls a ball from one end of the pitch towards the wicket at the other end. The batting side's players try to hit the bowled ball and run between the wickets. Major formats include Test cricket (5 days), One Day International (ODI, 50 overs), and Twenty20 (T20, 20 overs). The ICC Cricket World Cup is the international championship of One Day International cricket. The Indian Premier League (IPL) is the world's most valuable cricket league. Cricket is particularly popular in India, Australia, England, Pakistan, South Africa, Sri Lanka, and the West Indies.",
        description: "Cricket is a bat-and-ball sport played between two teams of eleven players in multiple formats.",
        url: "https://en.wikipedia.org/wiki/Cricket",
    },
    {
        title: "FIFA World Cup - Football",
        content: "The FIFA World Cup is an international association football competition contested by the senior men's national teams of the members of FIFA, the sport's global governing body. The championship has been awarded every four years since the inaugural tournament in 1930. The tournament consists of 32 teams (expanding to 48 in 2026) competing over about a month in the host nation. Brazil has won the most World Cups (5 times: 1958, 1962, 1970, 1994, 2002). Germany and Italy have each won 4 times. Argentina won in 2022 with Lionel Messi. Football (soccer) is the world's most popular sport with over 4 billion fans worldwide. The FIFA Women's World Cup has been held since 1991. The 2026 FIFA World Cup will be hosted jointly by the United States, Canada, and Mexico.",
        description: "The FIFA World Cup is the premier international football tournament held every four years.",
        url: "https://en.wikipedia.org/wiki/FIFA_World_Cup",
    },
    {
        title: "Olympic Games",
        content: "The Olympic Games are the leading international sporting events featuring summer and winter sports competitions in which thousands of athletes from around the world participate in a variety of competitions. The Olympic Games are considered the world's foremost sports competition with more than 200 nations participating. The modern Olympic Games were inspired by the ancient Olympic Games held in Olympia, Greece, from the 8th century BC to the 4th century AD. Baron Pierre de Coubertin founded the International Olympic Committee (IOC) in 1894, leading to the first modern Games in Athens in 1896. The Summer Olympics feature sports like athletics, swimming, gymnastics, basketball, and football. The Winter Olympics include skiing, ice skating, ice hockey, and snowboarding. The Olympic motto is Citius, Altius, Fortius – Communiter (Faster, Higher, Stronger – Together).",
        description: "The Olympic Games are the world's foremost international sporting competition with 200+ nations.",
        url: "https://en.wikipedia.org/wiki/Olympic_Games",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ENERGY & ENVIRONMENT
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Renewable Energy Sources",
        content: "Renewable energy is energy from sources that are naturally replenishing but flow-limited. They are virtually inexhaustible in duration but limited in the amount of energy that is available per unit of time. The major types of renewable energy sources include solar energy (photovoltaic panels and concentrated solar power), wind energy (onshore and offshore wind turbines), hydroelectric power (dams and run-of-river), geothermal energy (heat from the Earth's interior), biomass energy (organic materials), and tidal/wave energy. Solar and wind power have seen dramatic cost reductions, with solar panel costs dropping over 90% since 2010. Many countries have set targets for 100% renewable energy. Challenges include intermittency, energy storage (batteries), grid infrastructure, and land use. The global renewable energy capacity exceeded 3,000 GW in 2022.",
        description: "Renewable energy comes from naturally replenishing sources including solar, wind, hydro, and geothermal.",
        url: "https://en.wikipedia.org/wiki/Renewable_energy",
    },
    {
        title: "Electric Vehicles - EVs",
        content: "An electric vehicle (EV) is a vehicle that uses one or more electric motors for propulsion. Types include battery electric vehicles (BEVs), plug-in hybrid electric vehicles (PHEVs), and fuel cell electric vehicles (FCEVs). Tesla, founded by Elon Musk, is the world's most valuable automaker and has popularized EVs with models like the Model 3, Model Y, Model S, Model X, and Cybertruck. Other major EV manufacturers include BYD (China), Volkswagen Group, Hyundai-Kia, BMW, Mercedes-Benz, Ford, GM, Rivian, and Lucid Motors. Key advantages include zero tailpipe emissions, lower operating costs, less maintenance, instant torque, and quieter operation. Challenges include battery range anxiety, charging infrastructure, battery production costs, and charging time. Global EV sales exceeded 14 million units in 2023.",
        description: "Electric vehicles use electric motors for propulsion, with Tesla and BYD leading the market.",
        url: "https://en.wikipedia.org/wiki/Electric_vehicle",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // ARTS & CULTURE
    // ═══════════════════════════════════════════════════════════════════════
    {
        title: "Music - Art Form and Culture",
        content: "Music is the arrangement of sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content. Music is a universal cultural aspect of all human societies. General definitions of music include common elements such as pitch, rhythm, dynamics, timbre, and texture. Major genres include classical, rock, pop, hip-hop, jazz, blues, country, electronic, R&B, reggae, folk, metal, and world music. Notable musicians include Ludwig van Beethoven, Wolfgang Amadeus Mozart, The Beatles, Elvis Presley, Michael Jackson, Madonna, Bob Marley, Freddie Mercury, and Taylor Swift. Music streaming services like Spotify, Apple Music, YouTube Music, and Amazon Music have transformed how people consume music. The global music industry was valued at over $26 billion in 2023.",
        description: "Music is a universal art form involving the arrangement of sound to create melody, harmony, and rhythm.",
        url: "https://en.wikipedia.org/wiki/Music",
    },
    {
        title: "Film and Cinema",
        content: "Film, also called a movie, motion picture, or moving picture, is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. The Lumière Brothers held the first commercial public screening of cinematographed films in Paris in 1895. Major film industries include Hollywood (United States), Bollywood (India), Nollywood (Nigeria), and Chinese cinema. Key genres include drama, comedy, action, thriller, horror, science fiction, animation, documentary, and romance. Major film awards include the Academy Awards (Oscars), Golden Globe Awards, BAFTA Awards, and Cannes Film Festival Palme d'Or. Streaming services like Netflix, Disney+, Amazon Prime Video, and HBO Max have disrupted traditional cinema distribution.",
        description: "Film is a visual art form that communicates stories through moving images across various genres.",
        url: "https://en.wikipedia.org/wiki/Film",
    },
    {
        title: "Philosophy - Love of Wisdom",
        content: "Philosophy is the systematized study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language. Key branches include metaphysics (nature of reality), epistemology (nature of knowledge), ethics (morality and values), logic (valid reasoning), aesthetics (beauty and art), and political philosophy (government and justice). Major philosophical traditions include Western philosophy, Eastern philosophy (Chinese, Indian), and African philosophy. Influential philosophers include Socrates, Plato, Aristotle, Confucius, Descartes (I think therefore I am), Immanuel Kant, Friedrich Nietzsche, Jean-Paul Sartre, Simone de Beauvoir, and Ludwig Wittgenstein. Philosophy has deeply influenced science, politics, law, education, mathematics, and religion throughout human history.",
        description: "Philosophy studies fundamental questions about existence, knowledge, values, reason, and the mind.",
        url: "https://en.wikipedia.org/wiki/Philosophy",
    },
    {
        title: "Wikipedia - Free Online Encyclopedia",
        content: "Wikipedia is a free-content online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system called MediaWiki. It is the largest and most-read reference work in history. Wikipedia was launched on January 15, 2001, by Jimmy Wales and Larry Sanger. As of 2024, Wikipedia has more than 60 million articles in over 300 languages, with the English Wikipedia having over 6.7 million articles. Wikipedia is the seventh most-visited website globally. It is operated by the Wikimedia Foundation, a nonprofit organization funded mainly through donations. Wikipedia follows five pillars: it is an encyclopedia, written from a neutral point of view, free content, follows a code of conduct, and has no firm rules.",
        description: "Wikipedia is the world's largest free online encyclopedia with 60+ million articles in 300+ languages.",
        url: "https://en.wikipedia.org/wiki/Wikipedia",
    },
    {
        title: "SpaceX - Space Exploration Technologies",
        content: "Space Exploration Technologies Corp. (SpaceX) is an American spacecraft manufacturer, launch service provider, defense contractor, and satellite communications company headquartered in Hawthorne, California. Founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. SpaceX developed the Falcon 1, Falcon 9, Falcon Heavy, and Starship launch vehicles. The Falcon 9 first stage can be reused by landing vertically after launch, dramatically reducing launch costs. SpaceX's Dragon spacecraft delivers cargo and crew to the International Space Station (ISS). Starlink, SpaceX's satellite internet constellation, provides broadband internet access worldwide using thousands of low-Earth orbit satellites. SpaceX became the first private company to send astronauts to orbit in 2020. Starship, the largest rocket ever built, aims to enable human missions to Mars.",
        description: "SpaceX is a private aerospace company developing reusable rockets and Starlink satellite internet.",
        url: "https://en.wikipedia.org/wiki/SpaceX",
    },
    {
        title: "Tesla Inc. - Electric Vehicles and Clean Energy",
        content: "Tesla Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs, manufactures, and sells battery electric vehicles (BEVs), stationary battery energy storage devices, solar panels and solar roof tiles, and related products and services. Founded in 2003 by Martin Eberhard and Marc Tarpenning, Tesla was named after inventor Nikola Tesla. Elon Musk became chairman in 2004 and later CEO. Tesla's vehicle lineup includes Model S (sedan), Model 3 (affordable sedan), Model X (SUV), Model Y (crossover), Cybertruck (pickup), and the upcoming Roadster. Tesla operates Gigafactories in Nevada, Shanghai, Berlin, and Texas. Tesla's Autopilot and Full Self-Driving (FSD) systems use AI and computer vision for autonomous driving. Tesla is the world's most valuable automaker by market capitalization.",
        description: "Tesla is the world's most valuable automaker, producing electric vehicles and clean energy products.",
        url: "https://en.wikipedia.org/wiki/Tesla,_Inc.",
    },
];

// ═══════════════════════════════════════════════════════════════════════════
// Main Seeder Function
// ═══════════════════════════════════════════════════════════════════════════
async function seedGeneralData() {
    console.log('\n╔══════════════════════════════════════════════════════════════╗');
    console.log('║     VedEngine General Knowledge Database Seeder              ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log(`\n📋 Total entries to seed: ${GENERAL_DATA.length}`);

    let inserted = 0;
    let skipped = 0;
    let failed = 0;

    for (const entry of GENERAL_DATA) {
        try {
            // Check if this URL already exists in the database to avoid duplicates
            const existing = await prisma.document.findFirst({
                where: { url: entry.url },
                select: { id: true },
            });

            if (existing) {
                console.log(`  ⏭ Already exists: ${entry.title}`);
                skipped++;
                continue;
            }

            // Insert new document entry into database
            await prisma.document.create({
                data: {
                    title: entry.title,
                    content: entry.content,
                    description: entry.description,
                    url: entry.url,
                    fileType: 'WEB',
                },
            });

            console.log(`  ✅ Indexed: ${entry.title}`);
            inserted++;
        } catch (error) {
            console.error(`  ❌ Failed: ${entry.title} - ${error.message}`);
            failed++;
        }
    }

    // Final Summary
    console.log('\n╔══════════════════════════════════════════════════════════════╗');
    console.log('║                    SEEDING COMPLETE                          ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log(`\n📊 Results:`);
    console.log(`   ✅ Inserted:  ${inserted}`);
    console.log(`   ⏭ Skipped:   ${skipped}`);
    console.log(`   ❌ Failed:    ${failed}`);
    console.log(`   📦 Total:     ${GENERAL_DATA.length}`);
    console.log(`\n🎉 VedEngine database is now populated with general knowledge!\n`);

    await prisma.$disconnect();
}

seedGeneralData().catch((err) => {
    console.error('💥 Seeder crashed:', err);
    prisma.$disconnect();
    process.exit(1);
});
