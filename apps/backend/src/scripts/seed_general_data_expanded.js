import prisma from "../config/prisma.config.js";

/**
 * VedEngine Expanded General Knowledge Database Seeder
 * Generated from a large curated topic catalog.
 * Total entries: 525
 * Same Document schema as the original seed: title, content, description, url, fileType.
 */

const GENERAL_DATA = [
    // PROGRAMMING & SOFTWARE
    {
        title: "C Programming Language",
        content: "C is a compiled, procedural programming language created by Dennis Ritchie at Bell Labs. It provides low-level memory access, pointers, structures, arrays, functions, and manual memory management. C remains important for operating systems, embedded systems, compilers, networking software, and performance-critical applications.",
        description: "C is a compiled, procedural programming language created by Dennis Ritchie at Bell Labs.",
        url: "https://en.wikipedia.org/wiki/c_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "C++ Programming Language",
        content: "C++ is a general-purpose compiled language that extends C with object-oriented, generic, and modern programming features. Important concepts include classes, inheritance, polymorphism, templates, STL containers, iterators, smart pointers, lambdas, and move semantics. It is widely used for competitive programming, game engines, systems software, and high-performance applications.",
        description: "C++ is a general-purpose compiled language that extends C with object-oriented, generic, and modern programming features.",
        url: "https://en.wikipedia.org/wiki/c++_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Java Programming Language",
        content: "Java is a class-based object-oriented programming language designed around portability through the Java Virtual Machine. Core concepts include classes, interfaces, inheritance, exceptions, collections, generics, threads, streams, and garbage collection. Java is widely used for enterprise applications, Android development, backend services, and large distributed systems.",
        description: "Java is a class-based object-oriented programming language designed around portability through the Java Virtual Machine.",
        url: "https://en.wikipedia.org/wiki/java_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "TypeScript Programming Language",
        content: "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds interfaces, type aliases, generics, enums, union types, narrowing, and compile-time checking while compiling to JavaScript. TypeScript is widely used in large frontend and backend applications.",
        description: "TypeScript is a statically typed superset of JavaScript developed by Microsoft.",
        url: "https://en.wikipedia.org/wiki/typescript_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Go Programming Language",
        content: "Go is a compiled language created at Google with a focus on simplicity, concurrency, and fast compilation. It includes goroutines, channels, interfaces, garbage collection, and a strong standard library. Go is popular for cloud services, networking software, command-line tools, and infrastructure.",
        description: "Go is a compiled language created at Google with a focus on simplicity, concurrency, and fast compilation.",
        url: "https://en.wikipedia.org/wiki/go_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Rust Programming Language",
        content: "Rust is a systems programming language focused on memory safety, performance, and concurrency without a traditional garbage collector. Its ownership, borrowing, and lifetime systems prevent many classes of memory errors at compile time. Rust is used for operating systems, developer tools, browsers, networking, and high-performance services.",
        description: "Rust is a systems programming language focused on memory safety, performance, and concurrency without a traditional garbage collector.",
        url: "https://en.wikipedia.org/wiki/rust_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Kotlin Programming Language",
        content: "Kotlin is a modern statically typed language developed by JetBrains. It supports object-oriented and functional programming, null safety, extension functions, coroutines, and concise syntax. Kotlin is widely used for Android development and JVM backend applications.",
        description: "Kotlin is a modern statically typed language developed by JetBrains.",
        url: "https://en.wikipedia.org/wiki/kotlin_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "PHP Programming Language",
        content: "PHP is a server-side scripting language widely used for web development. It integrates closely with HTML and supports databases, sessions, authentication, APIs, and object-oriented programming. PHP powers many websites and platforms including WordPress-based applications.",
        description: "PHP is a server-side scripting language widely used for web development.",
        url: "https://en.wikipedia.org/wiki/php_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Ruby Programming Language",
        content: "Ruby is a dynamic object-oriented programming language designed for programmer productivity and expressive syntax. Ruby on Rails made Ruby particularly influential in web application development. Ruby supports blocks, mixins, metaprogramming, and automatic memory management.",
        description: "Ruby is a dynamic object-oriented programming language designed for programmer productivity and expressive syntax.",
        url: "https://en.wikipedia.org/wiki/ruby_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Swift Programming Language",
        content: "Swift is a compiled programming language developed by Apple for software across its platforms. It combines strong static typing, optionals, protocols, generics, closures, and memory safety. Swift is commonly used for iOS, macOS, watchOS, and tvOS applications.",
        description: "Swift is a compiled programming language developed by Apple for software across its platforms.",
        url: "https://en.wikipedia.org/wiki/swift_programming_language",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Data Structures",
        content: "Data structures organize data so that operations such as searching, insertion, deletion, and traversal can be performed efficiently. Common structures include arrays, linked lists, stacks, queues, hash tables, trees, heaps, graphs, and tries. Choosing an appropriate data structure is central to algorithm design.",
        description: "Data structures organize data so that operations such as searching, insertion, deletion, and traversal can be performed efficiently.",
        url: "https://en.wikipedia.org/wiki/data_structures",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Algorithms",
        content: "An algorithm is a finite sequence of well-defined steps for solving a problem or performing a computation. Algorithm analysis commonly considers time complexity and space complexity using asymptotic notation such as Big O. Important techniques include sorting, searching, recursion, divide and conquer, greedy algorithms, dynamic programming, and graph algorithms.",
        description: "An algorithm is a finite sequence of well-defined steps for solving a problem or performing a computation.",
        url: "https://en.wikipedia.org/wiki/algorithms",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Object-Oriented Programming",
        content: "Object-oriented programming organizes software around objects containing data and behavior. Its major principles are encapsulation, abstraction, inheritance, and polymorphism. OOP is used to model complex systems and promote modularity, reuse, and maintainability.",
        description: "Object-oriented programming organizes software around objects containing data and behavior.",
        url: "https://en.wikipedia.org/wiki/object-oriented_programming",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Functional Programming",
        content: "Functional programming treats computation as evaluation of functions and emphasizes immutability, composition, higher-order functions, and avoiding shared mutable state. Languages such as Haskell emphasize the paradigm, while JavaScript, Python, Scala, Kotlin, and many others provide functional features.",
        description: "Functional programming treats computation as evaluation of functions and emphasizes immutability, composition, higher-order functions, and avoiding shared mutable state.",
        url: "https://en.wikipedia.org/wiki/functional_programming",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Compiler",
        content: "A compiler translates source code written in one programming language into another form, commonly machine code or intermediate representation. Major compiler stages include lexical analysis, syntax analysis, semantic analysis, intermediate representation, optimization, and code generation.",
        description: "A compiler translates source code written in one programming language into another form, commonly machine code or intermediate representation.",
        url: "https://en.wikipedia.org/wiki/compiler",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "MySQL Database",
        content: "MySQL is an open-source relational database management system that uses SQL for defining, querying, and modifying structured data. It supports indexes, transactions, constraints, joins, stored procedures, replication, and multiple storage engines. MySQL is widely used in web applications and enterprise systems.",
        description: "MySQL is an open-source relational database management system that uses SQL for defining, querying, and modifying structured data.",
        url: "https://en.wikipedia.org/wiki/mysql_database",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "PostgreSQL Database",
        content: "PostgreSQL is an open-source object-relational database known for standards compliance and advanced features. It supports transactions, complex queries, JSON, arrays, full-text search, extensions, indexes, and powerful analytical capabilities. PostgreSQL is widely used for modern web, enterprise, and data-intensive applications.",
        description: "PostgreSQL is an open-source object-relational database known for standards compliance and advanced features.",
        url: "https://en.wikipedia.org/wiki/postgresql_database",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "MongoDB Database",
        content: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents. It provides flexible schemas, indexes, aggregation pipelines, replication, and sharding. MongoDB is often used when applications need flexible document structures and horizontal scalability.",
        description: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents.",
        url: "https://en.wikipedia.org/wiki/mongodb_database",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Redis In-Memory Database",
        content: "Redis is an in-memory data structure server commonly used for caching, sessions, queues, rate limiting, and real-time applications. It supports strings, lists, sets, sorted sets, hashes, streams, and other structures. Persistence and replication options allow Redis to be used beyond simple caching.",
        description: "Redis is an in-memory data structure server commonly used for caching, sessions, queues, rate limiting, and real-time applications.",
        url: "https://en.wikipedia.org/wiki/redis_in-memory_database",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Normalization",
        content: "Database normalization is a design process that reduces redundancy and update anomalies in relational databases. Normal forms include first normal form, second normal form, third normal form, and Boyce-Codd normal form. Normalization generally separates data into related tables connected through keys.",
        description: "Database normalization is a design process that reduces redundancy and update anomalies in relational databases.",
        url: "https://en.wikipedia.org/wiki/database_normalization",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "SQL Joins",
        content: "SQL joins combine rows from multiple relational tables using related columns or conditions. Common types are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN. Joins are fundamental for retrieving related information stored in normalized databases.",
        description: "SQL joins combine rows from multiple relational tables using related columns or conditions.",
        url: "https://en.wikipedia.org/wiki/sql_joins",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Indexing",
        content: "A database index is an auxiliary data structure that accelerates data retrieval by allowing the database engine to avoid scanning every row. Common index structures include B-trees and hash indexes. Indexes improve reads but consume storage and can increase the cost of writes.",
        description: "A database index is an auxiliary data structure that accelerates data retrieval by allowing the database engine to avoid scanning every row.",
        url: "https://en.wikipedia.org/wiki/database_indexing",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "ACID Transactions",
        content: "ACID describes four properties expected from reliable database transactions: atomicity, consistency, isolation, and durability. Atomicity means a transaction succeeds completely or not at all, while durability ensures committed changes survive failures. Isolation controls how concurrent transactions interact.",
        description: "ACID describes four properties expected from reliable database transactions: atomicity, consistency, isolation, and durability.",
        url: "https://en.wikipedia.org/wiki/acid_transactions",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Sharding",
        content: "Database sharding horizontally partitions data across multiple database servers or nodes. A shard key determines where records are stored. Sharding can increase storage capacity and throughput but introduces complexity around routing, balancing, transactions, and cross-shard queries.",
        description: "Database sharding horizontally partitions data across multiple database servers or nodes.",
        url: "https://en.wikipedia.org/wiki/database_sharding",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Data Warehousing",
        content: "A data warehouse is a centralized system designed for analytical queries and reporting rather than transactional workloads. Data is commonly extracted from operational systems, transformed, and loaded into analytical storage. Warehouses support business intelligence, dashboards, historical analysis, and decision making.",
        description: "A data warehouse is a centralized system designed for analytical queries and reporting rather than transactional workloads.",
        url: "https://en.wikipedia.org/wiki/data_warehousing",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "HTML",
        content: "HTML is the standard markup language used to structure documents on the web. It defines headings, paragraphs, links, images, forms, tables, semantic sections, and other elements. Browsers parse HTML to construct the document structure used to render web pages.",
        description: "HTML is the standard markup language used to structure documents on the web.",
        url: "https://en.wikipedia.org/wiki/html",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "CSS",
        content: "CSS is a stylesheet language used to control the presentation of HTML and other web documents. It handles colors, typography, spacing, layouts, animations, responsive design, and visual effects. Modern CSS includes Flexbox, Grid, custom properties, media queries, and container queries.",
        description: "CSS is a stylesheet language used to control the presentation of HTML and other web documents.",
        url: "https://en.wikipedia.org/wiki/css",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "HTTP Protocol",
        content: "HTTP is an application-layer protocol used for communication between clients and servers on the web. Common methods include GET, POST, PUT, PATCH, and DELETE, while status codes communicate outcomes such as success, redirection, client errors, and server errors.",
        description: "HTTP is an application-layer protocol used for communication between clients and servers on the web.",
        url: "https://en.wikipedia.org/wiki/http_protocol",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "REST API",
        content: "REST is an architectural style for networked applications that commonly uses HTTP resources and standard methods. REST APIs often represent resources with URLs and exchange JSON representations. Good API design considers resource naming, status codes, validation, pagination, authentication, and versioning.",
        description: "REST is an architectural style for networked applications that commonly uses HTTP resources and standard methods.",
        url: "https://en.wikipedia.org/wiki/rest_api",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "GraphQL",
        content: "GraphQL is a query language and runtime for APIs that allows clients to request the exact fields they need. A GraphQL API typically exposes a schema containing types, queries, mutations, and optionally subscriptions. It can reduce over-fetching and under-fetching compared with some REST designs.",
        description: "GraphQL is a query language and runtime for APIs that allows clients to request the exact fields they need.",
        url: "https://en.wikipedia.org/wiki/graphql",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "WebSockets",
        content: "WebSockets provide a persistent, bidirectional communication channel between a client and server. Unlike normal request-response HTTP interactions, either side can send messages after the connection is established. WebSockets are useful for chat, live notifications, multiplayer games, and real-time dashboards.",
        description: "WebSockets provide a persistent, bidirectional communication channel between a client and server.",
        url: "https://en.wikipedia.org/wiki/websockets",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Authentication",
        content: "Authentication verifies the identity of a user or system. Common mechanisms include passwords, session cookies, access tokens, OAuth, passkeys, and multi-factor authentication. Secure authentication requires careful credential storage, transport security, expiration, and recovery mechanisms.",
        description: "Authentication verifies the identity of a user or system.",
        url: "https://en.wikipedia.org/wiki/authentication",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Authorization",
        content: "Authorization determines what an authenticated identity is allowed to access or perform. Models include role-based access control, attribute-based access control, and permission-based systems. Authorization checks should be enforced on the server rather than relying only on frontend restrictions.",
        description: "Authorization determines what an authenticated identity is allowed to access or perform.",
        url: "https://en.wikipedia.org/wiki/authorization",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "JSON",
        content: "JSON is a lightweight text format commonly used to exchange structured data between web clients and servers. It represents objects, arrays, strings, numbers, booleans, and null values. JSON is widely supported across programming languages and web APIs.",
        description: "JSON is a lightweight text format commonly used to exchange structured data between web clients and servers.",
        url: "https://en.wikipedia.org/wiki/json",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Browser",
        content: "A web browser is software that retrieves, interprets, and displays web resources. Major browser components include networking, HTML parsing, CSS processing, JavaScript execution, rendering, storage, and security isolation. Examples include Chrome, Firefox, Safari, and Edge.",
        description: "A web browser is software that retrieves, interprets, and displays web resources.",
        url: "https://en.wikipedia.org/wiki/browser",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Artificial Neural Network",
        content: "An artificial neural network is a computational model composed of interconnected units organized into layers. During training, model parameters are adjusted to reduce an objective function. Neural networks are used for classification, regression, generation, recommendation, and many other machine learning tasks.",
        description: "An artificial neural network is a computational model composed of interconnected units organized into layers.",
        url: "https://en.wikipedia.org/wiki/artificial_neural_network",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Supervised Learning",
        content: "Supervised learning trains a model using labeled examples containing inputs and desired outputs. Common tasks include classification and regression. Typical algorithms include linear regression, logistic regression, decision trees, support vector machines, and neural networks.",
        description: "Supervised learning trains a model using labeled examples containing inputs and desired outputs.",
        url: "https://en.wikipedia.org/wiki/supervised_learning",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Unsupervised Learning",
        content: "Unsupervised learning discovers patterns in data without explicit target labels. Clustering, dimensionality reduction, density estimation, and representation learning are common examples. K-means and principal component analysis are widely taught techniques.",
        description: "Unsupervised learning discovers patterns in data without explicit target labels.",
        url: "https://en.wikipedia.org/wiki/unsupervised_learning",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Reinforcement Learning",
        content: "Reinforcement learning studies how an agent learns actions through interaction with an environment and feedback in the form of rewards. Important concepts include states, actions, policies, value functions, exploration, and exploitation. Applications include robotics, games, optimization, and recommendation.",
        description: "Reinforcement learning studies how an agent learns actions through interaction with an environment and feedback in the form of rewards.",
        url: "https://en.wikipedia.org/wiki/reinforcement_learning",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Natural Language Processing",
        content: "Natural language processing enables computers to process and generate human language. Tasks include tokenization, classification, translation, summarization, question answering, speech processing, and information extraction. Modern NLP relies heavily on transformer-based neural networks.",
        description: "Natural language processing enables computers to process and generate human language.",
        url: "https://en.wikipedia.org/wiki/natural_language_processing",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Computer Vision",
        content: "Computer vision enables computers to interpret visual information from images and video. Tasks include image classification, object detection, segmentation, tracking, optical character recognition, and image generation. Convolutional networks and vision transformers are common architectures.",
        description: "Computer vision enables computers to interpret visual information from images and video.",
        url: "https://en.wikipedia.org/wiki/computer_vision",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Transformer Architecture",
        content: "The transformer is a neural network architecture based primarily on attention mechanisms rather than recurrence. It uses components such as self-attention, feed-forward layers, positional information, residual connections, and normalization. Transformers have become central to modern language and multimodal AI systems.",
        description: "The transformer is a neural network architecture based primarily on attention mechanisms rather than recurrence.",
        url: "https://en.wikipedia.org/wiki/transformer_architecture",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Large Language Model",
        content: "A large language model is a neural network trained on large collections of text to learn statistical patterns of language. Modern LLMs commonly use transformer architectures and can perform generation, summarization, reasoning-like tasks, coding assistance, and question answering.",
        description: "A large language model is a neural network trained on large collections of text to learn statistical patterns of language.",
        url: "https://en.wikipedia.org/wiki/large_language_model",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Generative AI",
        content: "Generative artificial intelligence refers to models capable of producing new content such as text, images, audio, video, or code. Common techniques include transformers, diffusion models, variational methods, and generative adversarial networks. Generative AI systems require evaluation for accuracy, safety, bias, and misuse.",
        description: "Generative artificial intelligence refers to models capable of producing new content such as text, images, audio, video, or code.",
        url: "https://en.wikipedia.org/wiki/generative_ai",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Machine Learning Evaluation",
        content: "Machine learning evaluation measures how well a model generalizes to unseen data. Classification metrics include accuracy, precision, recall, F1 score, ROC-AUC, and confusion matrices. Regression metrics include MAE, MSE, RMSE, and R-squared.",
        description: "Machine learning evaluation measures how well a model generalizes to unseen data.",
        url: "https://en.wikipedia.org/wiki/machine_learning_evaluation",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Operating System",
        content: "An operating system manages hardware resources and provides services for application programs. Core responsibilities include process management, memory management, file systems, device management, networking, security, and scheduling. Examples include Linux, Windows, macOS, Android, and iOS.",
        description: "An operating system manages hardware resources and provides services for application programs.",
        url: "https://en.wikipedia.org/wiki/operating_system",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Process Management",
        content: "A process is a program in execution together with its associated state and resources. Operating systems create, schedule, suspend, resume, and terminate processes. Process management also involves context switching, inter-process communication, synchronization, and resource allocation.",
        description: "A process is a program in execution together with its associated state and resources.",
        url: "https://en.wikipedia.org/wiki/process_management",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "CPU Scheduling",
        content: "CPU scheduling determines which ready process receives processor time. Common algorithms include First Come First Served, Shortest Job First, Shortest Remaining Time First, Round Robin, and priority scheduling. Scheduling goals can include throughput, response time, turnaround time, and fairness.",
        description: "CPU scheduling determines which ready process receives processor time.",
        url: "https://en.wikipedia.org/wiki/cpu_scheduling",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Deadlock",
        content: "A deadlock occurs when processes are permanently waiting for resources held by one another. The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait. Systems can prevent, avoid, detect, and recover from deadlocks.",
        description: "A deadlock occurs when processes are permanently waiting for resources held by one another.",
        url: "https://en.wikipedia.org/wiki/deadlock",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Virtual Memory",
        content: "Virtual memory provides processes with an address space that can be larger or differently organized than physical memory. Paging and page tables translate virtual addresses to physical frames. Virtual memory enables process isolation and allows inactive pages to be moved to secondary storage.",
        description: "Virtual memory provides processes with an address space that can be larger or differently organized than physical memory.",
        url: "https://en.wikipedia.org/wiki/virtual_memory",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Paging",
        content: "Paging divides virtual memory into fixed-size pages and physical memory into frames. A page table maps virtual page numbers to physical frame numbers. Paging avoids external fragmentation but introduces page-table overhead and may require mechanisms such as a translation lookaside buffer.",
        description: "Paging divides virtual memory into fixed-size pages and physical memory into frames.",
        url: "https://en.wikipedia.org/wiki/paging",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "File System",
        content: "A file system organizes persistent data into files and directories and manages metadata, allocation, access, and permissions. Common file systems include NTFS, ext4, APFS, XFS, and FAT variants. File systems must balance reliability, performance, storage efficiency, and recovery.",
        description: "A file system organizes persistent data into files and directories and manages metadata, allocation, access, and permissions.",
        url: "https://en.wikipedia.org/wiki/file_system",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Inter Process Communication",
        content: "Inter-process communication allows processes to exchange data and coordinate execution. Common mechanisms include pipes, message queues, shared memory, sockets, signals, and semaphores. The choice depends on data volume, synchronization requirements, and whether communication is local or networked.",
        description: "Inter-process communication allows processes to exchange data and coordinate execution.",
        url: "https://en.wikipedia.org/wiki/inter_process_communication",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Synchronization",
        content: "Concurrent processes and threads may need synchronization to prevent race conditions and inconsistent shared state. Common primitives include mutexes, semaphores, monitors, condition variables, and atomic operations. Correct synchronization requires careful handling of ordering and resource ownership.",
        description: "Concurrent processes and threads may need synchronization to prevent race conditions and inconsistent shared state.",
        url: "https://en.wikipedia.org/wiki/synchronization",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Linux Kernel",
        content: "The Linux kernel is the core component of Linux operating systems and manages CPU scheduling, memory, devices, networking, filesystems, and system calls. It supports loadable modules and a wide range of hardware architectures. User programs interact with kernel services through system calls.",
        description: "The Linux kernel is the core component of Linux operating systems and manages CPU scheduling, memory, devices, networking, filesystems, and system calls.",
        url: "https://en.wikipedia.org/wiki/linux_kernel",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Computer Network",
        content: "A computer network connects devices so they can exchange information and share resources. Networks are built using protocols, addressing, routing, switching, and physical or wireless communication technologies. The Internet is the world's largest interconnected network.",
        description: "A computer network connects devices so they can exchange information and share resources.",
        url: "https://en.wikipedia.org/wiki/computer_network",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "OSI Model",
        content: "The OSI model divides networking communication into seven conceptual layers: physical, data link, network, transport, session, presentation, and application. It is primarily a learning and troubleshooting framework. Real Internet protocols do not map perfectly to these layers.",
        description: "The OSI model divides networking communication into seven conceptual layers: physical, data link, network, transport, session, presentation, and application.",
        url: "https://en.wikipedia.org/wiki/osi_model",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "TCP Protocol",
        content: "Transmission Control Protocol provides reliable, ordered, connection-oriented byte-stream communication. It uses mechanisms such as sequence numbers, acknowledgments, retransmission, flow control, and congestion control. TCP is used by protocols including HTTP and many application services.",
        description: "Transmission Control Protocol provides reliable, ordered, connection-oriented byte-stream communication.",
        url: "https://en.wikipedia.org/wiki/tcp_protocol",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "UDP Protocol",
        content: "User Datagram Protocol is a connectionless transport protocol with low overhead. It does not guarantee delivery, ordering, or duplicate suppression. UDP is useful for applications where low latency is important or where the application implements its own reliability.",
        description: "User Datagram Protocol is a connectionless transport protocol with low overhead.",
        url: "https://en.wikipedia.org/wiki/udp_protocol",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "IP Address",
        content: "An IP address identifies an interface or endpoint within an IP network. IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses. Addressing supports routing and can be organized into subnets and prefixes.",
        description: "An IP address identifies an interface or endpoint within an IP network.",
        url: "https://en.wikipedia.org/wiki/ip_address",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "DNS",
        content: "The Domain Name System translates human-readable domain names into information such as IP addresses. DNS is hierarchical and includes root servers, top-level domains, authoritative servers, and recursive resolvers. Caching reduces latency and traffic.",
        description: "The Domain Name System translates human-readable domain names into information such as IP addresses.",
        url: "https://en.wikipedia.org/wiki/dns",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "HTTP and HTTPS",
        content: "HTTPS is HTTP transmitted over a secure TLS connection. TLS provides encryption, integrity protection, and server authentication using certificates. HTTPS protects web traffic from many forms of passive interception and active tampering.",
        description: "HTTPS is HTTP transmitted over a secure TLS connection.",
        url: "https://en.wikipedia.org/wiki/http_and_https",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Router",
        content: "A router forwards packets between different networks using routing information. It examines destination addresses and selects an appropriate next hop. Routers may support routing protocols, network address translation, access control, and quality-of-service features.",
        description: "A router forwards packets between different networks using routing information.",
        url: "https://en.wikipedia.org/wiki/router",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Network Switch",
        content: "A network switch connects devices within a local network and forwards Ethernet frames based on MAC addresses. Modern switches can support VLANs, link aggregation, spanning tree protocols, and management features.",
        description: "A network switch connects devices within a local network and forwards Ethernet frames based on MAC addresses.",
        url: "https://en.wikipedia.org/wiki/network_switch",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Network Security",
        content: "Network security protects communication infrastructure and traffic against unauthorized access, disruption, and abuse. Common technologies include firewalls, VPNs, intrusion detection, intrusion prevention, segmentation, encryption, and secure authentication.",
        description: "Network security protects communication infrastructure and traffic against unauthorized access, disruption, and abuse.",
        url: "https://en.wikipedia.org/wiki/network_security",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Software Development Life Cycle",
        content: "The software development life cycle describes activities involved in building and maintaining software. Typical stages include requirements, design, implementation, testing, deployment, and maintenance. Different methodologies organize these activities differently.",
        description: "The software development life cycle describes activities involved in building and maintaining software.",
        url: "https://en.wikipedia.org/wiki/software_development_life_cycle",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Agile Software Development",
        content: "Agile software development emphasizes iterative delivery, customer feedback, collaboration, and adaptation to changing requirements. Scrum and Kanban are common approaches. Agile teams generally deliver software in small increments rather than waiting for a single final release.",
        description: "Agile software development emphasizes iterative delivery, customer feedback, collaboration, and adaptation to changing requirements.",
        url: "https://en.wikipedia.org/wiki/agile_software_development",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Scrum Framework",
        content: "Scrum is an agile framework for developing complex products through iterative work periods called sprints. Common accountabilities include Product Owner, Scrum Master, and Developers. Events include sprint planning, daily scrum, sprint review, and retrospective.",
        description: "Scrum is an agile framework for developing complex products through iterative work periods called sprints.",
        url: "https://en.wikipedia.org/wiki/scrum_framework",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Unit Testing",
        content: "Unit testing verifies small pieces of software, usually functions, methods, or classes, in isolation from external dependencies. Good unit tests are repeatable, focused, and fast. Mocking and dependency injection can help isolate the unit under test.",
        description: "Unit testing verifies small pieces of software, usually functions, methods, or classes, in isolation from external dependencies.",
        url: "https://en.wikipedia.org/wiki/unit_testing",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Integration Testing",
        content: "Integration testing checks whether multiple components work correctly together. It can expose problems in APIs, databases, message queues, authentication, and configuration that unit tests may not detect.",
        description: "Integration testing checks whether multiple components work correctly together.",
        url: "https://en.wikipedia.org/wiki/integration_testing",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Continuous Integration",
        content: "Continuous integration is a development practice in which code changes are frequently integrated and automatically validated. CI pipelines commonly run formatting checks, static analysis, unit tests, integration tests, and builds.",
        description: "Continuous integration is a development practice in which code changes are frequently integrated and automatically validated.",
        url: "https://en.wikipedia.org/wiki/continuous_integration",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Continuous Deployment",
        content: "Continuous deployment automatically releases validated software changes to production. It relies on automated testing, monitoring, rollback strategies, and reliable deployment infrastructure. Continuous delivery is closely related but may keep a manual approval step before production.",
        description: "Continuous deployment automatically releases validated software changes to production.",
        url: "https://en.wikipedia.org/wiki/continuous_deployment",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Software Design Patterns",
        content: "Design patterns are reusable approaches to recurring software design problems. Examples include Factory, Strategy, Observer, Adapter, Decorator, Singleton, and Repository patterns. Patterns should be applied when they simplify design rather than merely adding abstraction.",
        description: "Design patterns are reusable approaches to recurring software design problems.",
        url: "https://en.wikipedia.org/wiki/software_design_patterns",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Version Control",
        content: "Version control records changes to files over time and supports collaboration and recovery. Distributed systems such as Git allow developers to create branches, commits, merges, and tags locally while sharing repositories with remote platforms.",
        description: "Version control records changes to files over time and supports collaboration and recovery.",
        url: "https://en.wikipedia.org/wiki/version_control",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Code Review",
        content: "Code review is the practice of examining code changes before they are integrated. Reviews can identify defects, security issues, maintainability problems, unclear design, and missing tests. Effective reviews focus on correctness and constructive feedback.",
        description: "Code review is the practice of examining code changes before they are integrated.",
        url: "https://en.wikipedia.org/wiki/code_review",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Cryptography",
        content: "Cryptography uses mathematical techniques to protect information and communications. Major areas include encryption, hashing, digital signatures, key exchange, authentication, and certificates. Modern cryptographic systems depend on carefully analyzed algorithms and secure key management.",
        description: "Cryptography uses mathematical techniques to protect information and communications.",
        url: "https://en.wikipedia.org/wiki/cryptography",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Hash Function",
        content: "A cryptographic hash function maps input data to a fixed-size digest with properties such as preimage resistance and collision resistance. Hashes are widely used for integrity checking, digital signatures, password storage schemes, and data structures.",
        description: "A cryptographic hash function maps input data to a fixed-size digest with properties such as preimage resistance and collision resistance.",
        url: "https://en.wikipedia.org/wiki/hash_function",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Public Key Cryptography",
        content: "Public key cryptography uses a mathematically related public key and private key. The public key can be distributed openly while the private key must remain secret. Applications include encryption, digital signatures, authentication, and secure key exchange.",
        description: "Public key cryptography uses a mathematically related public key and private key.",
        url: "https://en.wikipedia.org/wiki/public_key_cryptography",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "SQL Injection",
        content: "SQL injection is a vulnerability in which attacker-controlled input changes the meaning of a database query. Parameterized queries and prepared statements are primary defenses. Input validation, least privilege, and secure application design provide additional protection.",
        description: "SQL injection is a vulnerability in which attacker-controlled input changes the meaning of a database query.",
        url: "https://en.wikipedia.org/wiki/sql_injection",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Cross Site Scripting",
        content: "Cross-site scripting occurs when untrusted content is interpreted as executable script in a user's browser. Types include stored, reflected, and DOM-based XSS. Context-aware output encoding, content security policy, and safe templating help reduce risk.",
        description: "Cross-site scripting occurs when untrusted content is interpreted as executable script in a user's browser.",
        url: "https://en.wikipedia.org/wiki/cross_site_scripting",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Phishing",
        content: "Phishing is a social engineering technique that attempts to trick users into revealing information or performing unsafe actions. Attacks may use deceptive emails, websites, messages, or phone calls. User education, multi-factor authentication, and technical filtering reduce risk.",
        description: "Phishing is a social engineering technique that attempts to trick users into revealing information or performing unsafe actions.",
        url: "https://en.wikipedia.org/wiki/phishing",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Firewall",
        content: "A firewall controls network traffic according to configured security rules. Firewalls may operate at different layers and can filter by addresses, ports, protocols, applications, or connection state. They are one component of a broader defense-in-depth strategy.",
        description: "A firewall controls network traffic according to configured security rules.",
        url: "https://en.wikipedia.org/wiki/firewall",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Multi Factor Authentication",
        content: "Multi-factor authentication requires two or more independent categories of evidence to verify identity. Factors can include knowledge, possession, and inherence. MFA significantly reduces the impact of many stolen-password attacks.",
        description: "Multi-factor authentication requires two or more independent categories of evidence to verify identity.",
        url: "https://en.wikipedia.org/wiki/multi_factor_authentication",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Zero Trust Security",
        content: "Zero trust is a security approach based on continuously verifying identities, devices, applications, and access requests rather than automatically trusting users because they are inside a network. Least privilege and segmentation are common principles.",
        description: "Zero trust is a security approach based on continuously verifying identities, devices, applications, and access requests rather than automatically trusting users because they are inside a network.",
        url: "https://en.wikipedia.org/wiki/zero_trust_security",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Secure Software Development",
        content: "Secure software development incorporates security into requirements, design, coding, testing, deployment, and maintenance. Practices include threat modeling, dependency management, secret protection, secure defaults, automated scanning, and incident response planning.",
        description: "Secure software development incorporates security into requirements, design, coding, testing, deployment, and maintenance.",
        url: "https://en.wikipedia.org/wiki/secure_software_development",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Probability",
        content: "Probability is the mathematical study of uncertainty and random events. Fundamental concepts include sample spaces, events, conditional probability, independence, Bayes' theorem, random variables, and probability distributions.",
        description: "Probability is the mathematical study of uncertainty and random events.",
        url: "https://en.wikipedia.org/wiki/probability",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Statistics",
        content: "Statistics involves collecting, analyzing, interpreting, and presenting data. Descriptive statistics summarize observations while inferential statistics use samples to draw conclusions about populations. Common concepts include mean, median, variance, confidence intervals, and hypothesis tests.",
        description: "Statistics involves collecting, analyzing, interpreting, and presenting data.",
        url: "https://en.wikipedia.org/wiki/statistics",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Linear Algebra",
        content: "Linear algebra studies vectors, matrices, linear transformations, and systems of linear equations. It provides mathematical foundations for computer graphics, optimization, machine learning, signal processing, and scientific computing.",
        description: "Linear algebra studies vectors, matrices, linear transformations, and systems of linear equations.",
        url: "https://en.wikipedia.org/wiki/linear_algebra",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Calculus",
        content: "Calculus studies continuous change and accumulation. Differential calculus focuses on rates of change while integral calculus focuses on accumulation and area. Calculus is fundamental to physics, engineering, optimization, economics, and machine learning.",
        description: "Calculus studies continuous change and accumulation.",
        url: "https://en.wikipedia.org/wiki/calculus",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Graph Theory",
        content: "Graph theory studies mathematical structures consisting of vertices and edges. Graphs can model networks, dependencies, roads, social relationships, and communication systems. Important algorithms include breadth-first search, depth-first search, shortest paths, and minimum spanning trees.",
        description: "Graph theory studies mathematical structures consisting of vertices and edges.",
        url: "https://en.wikipedia.org/wiki/graph_theory",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Set Theory",
        content: "Set theory studies collections of objects and relationships between them. Operations include union, intersection, difference, complement, and Cartesian product. Sets provide foundations for many areas of mathematics and computer science.",
        description: "Set theory studies collections of objects and relationships between them.",
        url: "https://en.wikipedia.org/wiki/set_theory",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Number Theory",
        content: "Number theory studies integers and their properties. Topics include prime numbers, divisibility, modular arithmetic, greatest common divisors, congruences, and Diophantine equations. Number theory is important in cryptography and algorithms.",
        description: "Number theory studies integers and their properties.",
        url: "https://en.wikipedia.org/wiki/number_theory",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Combinatorics",
        content: "Combinatorics studies counting, arrangements, selections, and discrete structures. Permutations, combinations, recurrence relations, inclusion-exclusion, and generating functions are common techniques.",
        description: "Combinatorics studies counting, arrangements, selections, and discrete structures.",
        url: "https://en.wikipedia.org/wiki/combinatorics",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Bayes Theorem",
        content: "Bayes' theorem describes how conditional probabilities can be updated using new evidence. It relates the probability of a hypothesis given evidence to the probability of the evidence given the hypothesis. Bayesian reasoning is used in statistics, diagnosis, classification, and decision making.",
        description: "Bayes' theorem describes how conditional probabilities can be updated using new evidence.",
        url: "https://en.wikipedia.org/wiki/bayes_theorem",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Regression Analysis",
        content: "Regression analysis models relationships between variables and can be used for prediction or inference. Linear regression estimates relationships using a linear model, while nonlinear and generalized models support broader situations.",
        description: "Regression analysis models relationships between variables and can be used for prediction or inference.",
        url: "https://en.wikipedia.org/wiki/regression_analysis",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Chemistry",
        content: "Chemistry studies matter, its composition, structure, properties, and transformations. Major areas include organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry. Chemical principles support medicine, materials science, energy, and manufacturing.",
        description: "Chemistry studies matter, its composition, structure, properties, and transformations.",
        url: "https://en.wikipedia.org/wiki/chemistry",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Biology",
        content: "Biology is the scientific study of living organisms and life processes. Major areas include genetics, ecology, evolution, microbiology, cell biology, physiology, and molecular biology.",
        description: "Biology is the scientific study of living organisms and life processes.",
        url: "https://en.wikipedia.org/wiki/biology",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Astronomy",
        content: "Astronomy studies celestial objects and phenomena beyond Earth's atmosphere. It includes planets, stars, galaxies, black holes, cosmology, and the evolution of the universe. Modern astronomy combines observations with physics and computational methods.",
        description: "Astronomy studies celestial objects and phenomena beyond Earth's atmosphere.",
        url: "https://en.wikipedia.org/wiki/astronomy",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Geology",
        content: "Geology studies Earth, its materials, structure, history, and processes. Topics include plate tectonics, minerals, rocks, earthquakes, volcanoes, erosion, and Earth's geological history.",
        description: "Geology studies Earth, its materials, structure, history, and processes.",
        url: "https://en.wikipedia.org/wiki/geology",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Ecology",
        content: "Ecology studies relationships between organisms and their environments. Concepts include populations, communities, ecosystems, food webs, nutrient cycles, biodiversity, and ecological succession.",
        description: "Ecology studies relationships between organisms and their environments.",
        url: "https://en.wikipedia.org/wiki/ecology",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Genetics",
        content: "Genetics studies heredity and variation in living organisms. Genes are segments of genetic material that influence biological traits through complex interactions. Modern genetics includes molecular genetics, genomics, population genetics, and genetic engineering.",
        description: "Genetics studies heredity and variation in living organisms.",
        url: "https://en.wikipedia.org/wiki/genetics",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Microbiology",
        content: "Microbiology studies microorganisms such as bacteria, archaea, fungi, protozoa, and viruses. Microorganisms influence ecosystems, human health, food production, biotechnology, and nutrient cycles.",
        description: "Microbiology studies microorganisms such as bacteria, archaea, fungi, protozoa, and viruses.",
        url: "https://en.wikipedia.org/wiki/microbiology",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Human Anatomy",
        content: "Human anatomy studies the structure of the human body. Major systems include skeletal, muscular, nervous, cardiovascular, respiratory, digestive, endocrine, urinary, and reproductive systems.",
        description: "Human anatomy studies the structure of the human body.",
        url: "https://en.wikipedia.org/wiki/human_anatomy",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Physics of Motion",
        content: "Classical mechanics describes motion using quantities such as displacement, velocity, acceleration, mass, and force. Newton's laws connect forces with changes in motion and provide a foundation for engineering and physical science.",
        description: "Classical mechanics describes motion using quantities such as displacement, velocity, acceleration, mass, and force.",
        url: "https://en.wikipedia.org/wiki/physics_of_motion",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Thermodynamics",
        content: "Thermodynamics studies energy, heat, work, temperature, and transformations between energy forms. The laws of thermodynamics describe conservation of energy, entropy, and limits on physical processes.",
        description: "Thermodynamics studies energy, heat, work, temperature, and transformations between energy forms.",
        url: "https://en.wikipedia.org/wiki/thermodynamics",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Ancient Egypt",
        content: "Ancient Egyptian civilization developed along the Nile River and lasted for thousands of years. It is known for monumental architecture, hieroglyphic writing, complex religious traditions, centralized government, mathematics, medicine, and extensive archaeological remains.",
        description: "Ancient Egyptian civilization developed along the Nile River and lasted for thousands of years.",
        url: "https://en.wikipedia.org/wiki/ancient_egypt",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Indus Valley Civilization",
        content: "The Indus Valley Civilization developed in parts of present-day South Asia during the Bronze Age. Major sites include Harappa and Mohenjo-daro. The civilization is known for planned cities, drainage systems, standardized weights, trade, and an undeciphered writing system.",
        description: "The Indus Valley Civilization developed in parts of present-day South Asia during the Bronze Age.",
        url: "https://en.wikipedia.org/wiki/indus_valley_civilization",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Maurya Empire",
        content: "The Maurya Empire was one of the largest political formations in ancient South Asia. Chandragupta Maurya established the empire, while Ashoka became famous for policies influenced by Buddhism and inscriptions distributed across the subcontinent.",
        description: "The Maurya Empire was one of the largest political formations in ancient South Asia.",
        url: "https://en.wikipedia.org/wiki/maurya_empire",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Gupta Empire",
        content: "The Gupta period is often associated with major developments in mathematics, astronomy, literature, art, and science in South Asia. Important figures and works from the period influenced later Indian intellectual traditions.",
        description: "The Gupta period is often associated with major developments in mathematics, astronomy, literature, art, and science in South Asia.",
        url: "https://en.wikipedia.org/wiki/gupta_empire",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Mughal Empire",
        content: "The Mughal Empire was a major early modern empire in South Asia founded by Babur in 1526. Mughal rulers contributed to architecture, administration, art, literature, and cultural exchange. The empire reached significant territorial extent under rulers including Akbar, Shah Jahan, and Aurangzeb.",
        description: "The Mughal Empire was a major early modern empire in South Asia founded by Babur in 1526.",
        url: "https://en.wikipedia.org/wiki/mughal_empire",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "British Raj",
        content: "The British Raj refers to the period of direct British Crown rule over much of the Indian subcontinent from 1858 to 1947. It shaped administration, infrastructure, education, economy, and political movements while also being associated with colonial exploitation and resistance.",
        description: "The British Raj refers to the period of direct British Crown rule over much of the Indian subcontinent from 1858 to 1947.",
        url: "https://en.wikipedia.org/wiki/british_raj",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Indian Independence Movement",
        content: "The Indian independence movement was a long political and social struggle against British colonial rule. It included constitutional efforts, mass movements, revolutionary activities, labor and peasant mobilization, and campaigns led by organizations such as the Indian National Congress.",
        description: "The Indian independence movement was a long political and social struggle against British colonial rule.",
        url: "https://en.wikipedia.org/wiki/indian_independence_movement",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "French Revolution",
        content: "The French Revolution began in 1789 and transformed France's political and social order. Major events included the Estates-General, fall of the Bastille, declaration of rights, abolition of monarchy, Reign of Terror, and rise of Napoleon.",
        description: "The French Revolution began in 1789 and transformed France's political and social order.",
        url: "https://en.wikipedia.org/wiki/french_revolution",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Renaissance",
        content: "The Renaissance was a period of cultural and intellectual transformation that began in Italian cities and spread across Europe. It featured renewed interest in classical learning, humanism, art, science, literature, and new approaches to observation.",
        description: "The Renaissance was a period of cultural and intellectual transformation that began in Italian cities and spread across Europe.",
        url: "https://en.wikipedia.org/wiki/renaissance",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Cold War",
        content: "The Cold War was a prolonged geopolitical rivalry between the United States and Soviet Union and their respective allies after World War II. It involved political competition, military alliances, nuclear deterrence, proxy conflicts, technological competition, and the space race.",
        description: "The Cold War was a prolonged geopolitical rivalry between the United States and Soviet Union and their respective allies after World War II.",
        url: "https://en.wikipedia.org/wiki/cold_war",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Earth",
        content: "Earth is the third planet from the Sun and the only astronomical object currently known to support life. It has a layered interior, an atmosphere, liquid surface water, a magnetic field, and a diverse biosphere.",
        description: "Earth is the third planet from the Sun and the only astronomical object currently known to support life.",
        url: "https://en.wikipedia.org/wiki/earth",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Continents",
        content: "The commonly taught seven-continent model includes Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Continents are large landmasses whose boundaries may be defined differently in geographic traditions.",
        description: "The commonly taught seven-continent model includes Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        url: "https://en.wikipedia.org/wiki/continents",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Indian Ocean",
        content: "The Indian Ocean is the third-largest ocean and lies between Africa, Asia, Australia, and the Southern Ocean. It is important for climate, monsoon systems, biodiversity, shipping, fisheries, and international trade.",
        description: "The Indian Ocean is the third-largest ocean and lies between Africa, Asia, Australia, and the Southern Ocean.",
        url: "https://en.wikipedia.org/wiki/indian_ocean",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Himalayas",
        content: "The Himalayas are a major mountain system in Asia formed by the collision of the Indian and Eurasian tectonic plates. They contain some of the world's highest peaks and strongly influence climate and river systems.",
        description: "The Himalayas are a major mountain system in Asia formed by the collision of the Indian and Eurasian tectonic plates.",
        url: "https://en.wikipedia.org/wiki/himalayas",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Amazon Rainforest",
        content: "The Amazon rainforest is a vast tropical forest primarily in South America. It supports exceptional biodiversity and plays important roles in regional climate, water cycling, carbon storage, and indigenous livelihoods.",
        description: "The Amazon rainforest is a vast tropical forest primarily in South America.",
        url: "https://en.wikipedia.org/wiki/amazon_rainforest",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Sahara Desert",
        content: "The Sahara is the largest hot desert and covers a large part of North Africa. Its environment includes dunes, rocky plateaus, mountains, gravel plains, and oases, with life adapted to limited water.",
        description: "The Sahara is the largest hot desert and covers a large part of North Africa.",
        url: "https://en.wikipedia.org/wiki/sahara_desert",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Ganges River",
        content: "The Ganges is a major river system of South Asia with deep geographic, cultural, agricultural, and economic importance. Its basin supports a very large population and contains extensive agricultural regions.",
        description: "The Ganges is a major river system of South Asia with deep geographic, cultural, agricultural, and economic importance.",
        url: "https://en.wikipedia.org/wiki/ganges_river",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Climate Zones",
        content: "Climate zones classify regions based on long-term patterns of temperature and precipitation. Major broad categories include tropical, dry, temperate, continental, and polar climates, with more detailed classification systems providing finer distinctions.",
        description: "Climate zones classify regions based on long-term patterns of temperature and precipitation.",
        url: "https://en.wikipedia.org/wiki/climate_zones",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Map Projections",
        content: "A map projection transforms Earth's curved surface into a flat representation. Every projection introduces some form of distortion in area, shape, distance, or direction. Different projections are selected according to their intended use.",
        description: "A map projection transforms Earth's curved surface into a flat representation.",
        url: "https://en.wikipedia.org/wiki/map_projections",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Plate Tectonics",
        content: "Plate tectonics describes the movement of large sections of Earth's lithosphere over the underlying mantle. Plate interactions create mountains, earthquakes, volcanoes, ocean basins, and many major geological features.",
        description: "Plate tectonics describes the movement of large sections of Earth's lithosphere over the underlying mantle.",
        url: "https://en.wikipedia.org/wiki/plate_tectonics",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Economics",
        content: "Economics studies how people and organizations allocate scarce resources to satisfy competing needs and wants. Microeconomics examines individual markets and decisions while macroeconomics studies economies as a whole.",
        description: "Economics studies how people and organizations allocate scarce resources to satisfy competing needs and wants.",
        url: "https://en.wikipedia.org/wiki/economics",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Supply and Demand",
        content: "Supply and demand describe how sellers and buyers interact in markets. The equilibrium price and quantity depend on the relationship between the amount producers offer and the amount consumers want to purchase.",
        description: "Supply and demand describe how sellers and buyers interact in markets.",
        url: "https://en.wikipedia.org/wiki/supply_and_demand",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Inflation",
        content: "Inflation is a sustained increase in the general price level of goods and services over time. It reduces the purchasing power of money when incomes do not rise proportionally. Central banks use monetary policy among other tools to influence inflation.",
        description: "Inflation is a sustained increase in the general price level of goods and services over time.",
        url: "https://en.wikipedia.org/wiki/inflation",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Gross Domestic Product",
        content: "Gross domestic product measures the monetary value of final goods and services produced within an economy during a specified period. GDP can be measured using expenditure, income, or production approaches.",
        description: "Gross domestic product measures the monetary value of final goods and services produced within an economy during a specified period.",
        url: "https://en.wikipedia.org/wiki/gross_domestic_product",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Central Bank",
        content: "A central bank manages monetary policy and performs functions related to currency, financial stability, and banking systems. Examples include the Reserve Bank of India, Federal Reserve, European Central Bank, and Bank of England.",
        description: "A central bank manages monetary policy and performs functions related to currency, financial stability, and banking systems.",
        url: "https://en.wikipedia.org/wiki/central_bank",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Interest Rate",
        content: "An interest rate represents the cost of borrowing money or the return earned on lending and saving. Interest rates influence consumption, investment, housing, exchange rates, and financial asset prices.",
        description: "An interest rate represents the cost of borrowing money or the return earned on lending and saving.",
        url: "https://en.wikipedia.org/wiki/interest_rate",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Market Capitalization",
        content: "Market capitalization is the market value of a publicly traded company's outstanding shares. It is calculated by multiplying the share price by the number of outstanding shares. Investors often use market capitalization to classify companies by size.",
        description: "Market capitalization is the market value of a publicly traded company's outstanding shares.",
        url: "https://en.wikipedia.org/wiki/market_capitalization",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Mutual Fund",
        content: "A mutual fund pools money from multiple investors and invests it according to a defined strategy. Funds may invest in stocks, bonds, money-market instruments, or combinations of assets. Investors receive units representing their share of the portfolio.",
        description: "A mutual fund pools money from multiple investors and invests it according to a defined strategy.",
        url: "https://en.wikipedia.org/wiki/mutual_fund",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Exchange Traded Fund",
        content: "An exchange-traded fund is an investment fund whose shares trade on a stock exchange. ETFs can track indexes, sectors, commodities, bonds, or other strategies. They combine pooled investment characteristics with exchange trading.",
        description: "An exchange-traded fund is an investment fund whose shares trade on a stock exchange.",
        url: "https://en.wikipedia.org/wiki/exchange_traded_fund",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Supply Chain Management",
        content: "Supply chain management coordinates the flow of materials, information, and finances from suppliers through production and distribution to customers. Important areas include procurement, inventory, logistics, forecasting, and supplier management.",
        description: "Supply chain management coordinates the flow of materials, information, and finances from suppliers through production and distribution to customers.",
        url: "https://en.wikipedia.org/wiki/supply_chain_management",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Solar Energy",
        content: "Solar energy uses radiation from the Sun to produce electricity or heat. Photovoltaic cells convert sunlight directly into electricity while solar thermal systems capture heat. Solar power is renewable but depends on sunlight availability and requires suitable infrastructure.",
        description: "Solar energy uses radiation from the Sun to produce electricity or heat.",
        url: "https://en.wikipedia.org/wiki/solar_energy",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Wind Energy",
        content: "Wind energy converts the kinetic energy of moving air into electricity using turbines. Wind farms can be located on land or offshore. Performance depends on wind resources, turbine design, grid connection, and environmental considerations.",
        description: "Wind energy converts the kinetic energy of moving air into electricity using turbines.",
        url: "https://en.wikipedia.org/wiki/wind_energy",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Hydroelectric Power",
        content: "Hydroelectric power generates electricity from moving or falling water. Dams and run-of-river systems can provide renewable electricity and, in some cases, energy storage. Environmental effects can include changes to rivers, ecosystems, and communities.",
        description: "Hydroelectric power generates electricity from moving or falling water.",
        url: "https://en.wikipedia.org/wiki/hydroelectric_power",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Nuclear Energy",
        content: "Nuclear power generates energy through nuclear reactions, commonly fission of heavy atomic nuclei. Nuclear plants can produce large amounts of electricity with low operational carbon emissions, while requiring strong safety, waste management, and regulatory systems.",
        description: "Nuclear power generates energy through nuclear reactions, commonly fission of heavy atomic nuclei.",
        url: "https://en.wikipedia.org/wiki/nuclear_energy",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Biodiversity",
        content: "Biodiversity describes the variety of life at genetic, species, and ecosystem levels. Biodiversity supports ecosystem functions and human well-being but can be affected by habitat loss, pollution, invasive species, overexploitation, and climate change.",
        description: "Biodiversity describes the variety of life at genetic, species, and ecosystem levels.",
        url: "https://en.wikipedia.org/wiki/biodiversity",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Recycling",
        content: "Recycling processes used materials so that components can be recovered and used again. Common recyclable materials include paper, glass, metals, and selected plastics. Recycling can reduce demand for raw materials but depends on collection, sorting, processing, and market conditions.",
        description: "Recycling processes used materials so that components can be recovered and used again.",
        url: "https://en.wikipedia.org/wiki/recycling",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Air Pollution",
        content: "Air pollution occurs when harmful substances enter the atmosphere at concentrations that can damage health, ecosystems, or materials. Major pollutants include particulate matter, nitrogen oxides, sulfur dioxide, ozone, and carbon monoxide.",
        description: "Air pollution occurs when harmful substances enter the atmosphere at concentrations that can damage health, ecosystems, or materials.",
        url: "https://en.wikipedia.org/wiki/air_pollution",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Water Pollution",
        content: "Water pollution occurs when contaminants degrade rivers, lakes, groundwater, oceans, or other water bodies. Sources include industrial discharge, agricultural runoff, sewage, plastics, and chemical contamination.",
        description: "Water pollution occurs when contaminants degrade rivers, lakes, groundwater, oceans, or other water bodies.",
        url: "https://en.wikipedia.org/wiki/water_pollution",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Waste Management",
        content: "Waste management includes collection, transportation, treatment, recycling, recovery, and disposal of waste. Modern approaches emphasize waste prevention, reuse, material recovery, composting, and safe disposal.",
        description: "Waste management includes collection, transportation, treatment, recycling, recovery, and disposal of waste.",
        url: "https://en.wikipedia.org/wiki/waste_management",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Sustainable Development",
        content: "Sustainable development seeks to meet present needs while preserving the ability of future generations to meet their needs. It integrates environmental protection, economic development, and social well-being.",
        description: "Sustainable development seeks to meet present needs while preserving the ability of future generations to meet their needs.",
        url: "https://en.wikipedia.org/wiki/sustainable_development",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Literature",
        content: "Literature includes written and oral works that use language to communicate ideas, experiences, narratives, and artistic expression. Major forms include poetry, drama, fiction, nonfiction, essays, and epics.",
        description: "Literature includes written and oral works that use language to communicate ideas, experiences, narratives, and artistic expression.",
        url: "https://en.wikipedia.org/wiki/literature",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Poetry",
        content: "Poetry is a literary form that uses concentrated language, rhythm, imagery, sound, and structure to express ideas or emotions. Forms vary widely across cultures and periods.",
        description: "Poetry is a literary form that uses concentrated language, rhythm, imagery, sound, and structure to express ideas or emotions.",
        url: "https://en.wikipedia.org/wiki/poetry",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Painting",
        content: "Painting is a visual art practice in which pigments or other materials are applied to a surface. Styles include realism, impressionism, expressionism, cubism, surrealism, abstract art, and many regional traditions.",
        description: "Painting is a visual art practice in which pigments or other materials are applied to a surface.",
        url: "https://en.wikipedia.org/wiki/painting",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Photography",
        content: "Photography creates images by recording light using cameras or other imaging systems. Digital photography uses electronic sensors while traditional photography uses light-sensitive materials such as film.",
        description: "Photography creates images by recording light using cameras or other imaging systems.",
        url: "https://en.wikipedia.org/wiki/photography",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Theatre",
        content: "Theatre is a performing art in which actors present stories or ideas before an audience. It combines performance, dialogue, movement, set design, lighting, sound, costume, and direction.",
        description: "Theatre is a performing art in which actors present stories or ideas before an audience.",
        url: "https://en.wikipedia.org/wiki/theatre",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Documentary Film",
        content: "A documentary is a nonfiction audiovisual work that presents real people, events, places, or issues. Documentary filmmakers use interviews, observation, archival material, narration, and visual storytelling.",
        description: "A documentary is a nonfiction audiovisual work that presents real people, events, places, or issues.",
        url: "https://en.wikipedia.org/wiki/documentary_film",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Animation",
        content: "Animation creates the appearance of movement by presenting sequential images or frames. Techniques include traditional hand-drawn animation, stop motion, 2D digital animation, and 3D computer animation.",
        description: "Animation creates the appearance of movement by presenting sequential images or frames.",
        url: "https://en.wikipedia.org/wiki/animation",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "World Music",
        content: "World music is a broad term often used for musical traditions outside dominant commercial Western categories. It can encompass diverse regional instruments, rhythms, languages, performance practices, and cultural contexts.",
        description: "World music is a broad term often used for musical traditions outside dominant commercial Western categories.",
        url: "https://en.wikipedia.org/wiki/world_music",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Cultural Heritage",
        content: "Cultural heritage includes traditions, knowledge, practices, monuments, objects, and places inherited from previous generations. Heritage may be tangible or intangible and can be preserved through documentation, education, conservation, and community practice.",
        description: "Cultural heritage includes traditions, knowledge, practices, monuments, objects, and places inherited from previous generations.",
        url: "https://en.wikipedia.org/wiki/cultural_heritage",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Museum",
        content: "A museum collects, preserves, researches, and interprets objects or other forms of cultural and scientific heritage. Museums can specialize in art, history, natural science, technology, anthropology, or many other fields.",
        description: "A museum collects, preserves, researches, and interprets objects or other forms of cultural and scientific heritage.",
        url: "https://en.wikipedia.org/wiki/museum",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Human Heart",
        content: "The human heart is a muscular organ that pumps blood through the circulatory system. It has four chambers and coordinated electrical activity that regulates contraction. The cardiovascular system delivers oxygen and nutrients and removes metabolic waste.",
        description: "The human heart is a muscular organ that pumps blood through the circulatory system.",
        url: "https://en.wikipedia.org/wiki/human_heart",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Human Lungs",
        content: "The lungs are organs of the respiratory system responsible for gas exchange. Air reaches microscopic alveoli where oxygen moves into blood and carbon dioxide moves out. Breathing is coordinated by respiratory muscles and the nervous system.",
        description: "The lungs are organs of the respiratory system responsible for gas exchange.",
        url: "https://en.wikipedia.org/wiki/human_lungs",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Immune System",
        content: "The immune system protects the body from pathogens and abnormal cells. It includes physical barriers, innate immune mechanisms, and adaptive immune responses involving specialized cells and antibodies.",
        description: "The immune system protects the body from pathogens and abnormal cells.",
        url: "https://en.wikipedia.org/wiki/immune_system",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Digestive System",
        content: "The digestive system breaks food into nutrients that can be absorbed and used by the body. Major organs include the mouth, esophagus, stomach, small intestine, large intestine, liver, pancreas, and gallbladder.",
        description: "The digestive system breaks food into nutrients that can be absorbed and used by the body.",
        url: "https://en.wikipedia.org/wiki/digestive_system",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Endocrine System",
        content: "The endocrine system consists of glands and tissues that produce hormones regulating processes such as metabolism, growth, reproduction, stress responses, and blood glucose. Hormones travel through the bloodstream to target cells.",
        description: "The endocrine system consists of glands and tissues that produce hormones regulating processes such as metabolism, growth, reproduction, stress responses, and blood glucose.",
        url: "https://en.wikipedia.org/wiki/endocrine_system",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Nutrition",
        content: "Nutrition studies how organisms obtain and use nutrients and energy from food. Major nutrients include carbohydrates, proteins, fats, vitamins, minerals, water, and in some contexts dietary fiber.",
        description: "Nutrition studies how organisms obtain and use nutrients and energy from food.",
        url: "https://en.wikipedia.org/wiki/nutrition",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Sleep",
        content: "Sleep is a recurring biological state associated with altered consciousness, reduced responsiveness, and characteristic brain and physiological activity. Healthy sleep supports memory, learning, immune function, mood, and physical recovery.",
        description: "Sleep is a recurring biological state associated with altered consciousness, reduced responsiveness, and characteristic brain and physiological activity.",
        url: "https://en.wikipedia.org/wiki/sleep",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Exercise",
        content: "Physical exercise is planned or structured physical activity performed to improve or maintain fitness and health. Major categories include aerobic activity, resistance training, flexibility work, balance, and mobility.",
        description: "Physical exercise is planned or structured physical activity performed to improve or maintain fitness and health.",
        url: "https://en.wikipedia.org/wiki/exercise",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Public Health",
        content: "Public health focuses on protecting and improving health at population level. It includes disease prevention, health promotion, environmental health, epidemiology, vaccination programs, health policy, and community interventions.",
        description: "Public health focuses on protecting and improving health at population level.",
        url: "https://en.wikipedia.org/wiki/public_health",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Epidemiology",
        content: "Epidemiology studies the distribution and determinants of health-related conditions in populations. Epidemiological methods help identify risk factors, understand outbreaks, evaluate interventions, and guide public health decisions.",
        description: "Epidemiology studies the distribution and determinants of health-related conditions in populations.",
        url: "https://en.wikipedia.org/wiki/epidemiology",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "International Space Station",
        content: "The International Space Station is a large modular laboratory in low Earth orbit operated through international cooperation. It supports scientific experiments, technology demonstrations, Earth observation, and long-duration human spaceflight research.",
        description: "The International Space Station is a large modular laboratory in low Earth orbit operated through international cooperation.",
        url: "https://en.wikipedia.org/wiki/international_space_station",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "James Webb Space Telescope",
        content: "The James Webb Space Telescope is a large space observatory designed primarily for infrared astronomy. Its observations help study early galaxies, star and planet formation, exoplanet atmospheres, and objects within our Solar System.",
        description: "The James Webb Space Telescope is a large space observatory designed primarily for infrared astronomy.",
        url: "https://en.wikipedia.org/wiki/james_webb_space_telescope",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Mars Exploration",
        content: "Mars is a rocky planet with a thin atmosphere and evidence of ancient water activity. Robotic missions have studied its geology, climate, surface chemistry, and potential habitability. Mars remains a major target for future exploration.",
        description: "Mars is a rocky planet with a thin atmosphere and evidence of ancient water activity.",
        url: "https://en.wikipedia.org/wiki/mars_exploration",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Moon",
        content: "The Moon is Earth's natural satellite and strongly influences ocean tides. It is tidally locked to Earth, meaning the same side generally faces our planet. The Moon has been visited by crewed Apollo missions and numerous robotic spacecraft.",
        description: "The Moon is Earth's natural satellite and strongly influences ocean tides.",
        url: "https://en.wikipedia.org/wiki/moon",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Satellite",
        content: "A satellite is an object placed in orbit around a celestial body. Artificial satellites support communication, navigation, weather observation, Earth imaging, scientific research, and military applications.",
        description: "A satellite is an object placed in orbit around a celestial body.",
        url: "https://en.wikipedia.org/wiki/satellite",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Rocket",
        content: "A rocket generates thrust by expelling mass and can operate in space without relying on surrounding air. Rockets use principles of momentum conservation and can employ liquid or solid propellants.",
        description: "A rocket generates thrust by expelling mass and can operate in space without relying on surrounding air.",
        url: "https://en.wikipedia.org/wiki/rocket",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Exoplanet",
        content: "An exoplanet is a planet outside our Solar System. Astronomers detect exoplanets using techniques such as transit photometry and radial velocity measurements. Thousands of confirmed exoplanets reveal a wide diversity of planetary systems.",
        description: "An exoplanet is a planet outside our Solar System.",
        url: "https://en.wikipedia.org/wiki/exoplanet",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Space Telescope",
        content: "A space telescope observes astronomical objects from outside Earth's atmosphere. Space-based observatories can avoid atmospheric absorption and turbulence and can observe wavelengths that are blocked or distorted by the atmosphere.",
        description: "A space telescope observes astronomical objects from outside Earth's atmosphere.",
        url: "https://en.wikipedia.org/wiki/space_telescope",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Quantum Computing",
        content: "Quantum computing uses quantum-mechanical states to represent and manipulate information. Quantum bits can exhibit superposition and entanglement, while quantum algorithms can provide advantages for specific computational problems.",
        description: "Quantum computing uses quantum-mechanical states to represent and manipulate information.",
        url: "https://en.wikipedia.org/wiki/quantum_computing",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Nanotechnology",
        content: "Nanotechnology involves understanding and manipulating matter at extremely small scales, commonly around the nanometer range. Applications include electronics, medicine, materials, sensors, energy, and surface engineering.",
        description: "Nanotechnology involves understanding and manipulating matter at extremely small scales, commonly around the nanometer range.",
        url: "https://en.wikipedia.org/wiki/nanotechnology",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "C Programming Language - Overview",
        content: "C is a compiled, procedural programming language created by Dennis Ritchie at Bell Labs. It provides low-level memory access, pointers, structures, arrays, functions, and manual memory management. C remains important for operating systems, embedded systems, compilers, networking software, and performance-critical applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "C is a compiled, procedural programming language created by Dennis Ritchie at Bell Labs.",
        url: "https://en.wikipedia.org/wiki/c_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "C Programming Language - Concepts and Applications",
        content: "C is a compiled, procedural programming language created by Dennis Ritchie at Bell Labs. It provides low-level memory access, pointers, structures, arrays, functions, and manual memory management. C remains important for operating systems, embedded systems, compilers, networking software, and performance-critical applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "C is a compiled, procedural programming language created by Dennis Ritchie at Bell Labs.",
        url: "https://en.wikipedia.org/wiki/c_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "C++ Programming Language - Overview",
        content: "C++ is a general-purpose compiled language that extends C with object-oriented, generic, and modern programming features. Important concepts include classes, inheritance, polymorphism, templates, STL containers, iterators, smart pointers, lambdas, and move semantics. It is widely used for competitive programming, game engines, systems software, and high-performance applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "C++ is a general-purpose compiled language that extends C with object-oriented, generic, and modern programming features.",
        url: "https://en.wikipedia.org/wiki/c++_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "C++ Programming Language - Concepts and Applications",
        content: "C++ is a general-purpose compiled language that extends C with object-oriented, generic, and modern programming features. Important concepts include classes, inheritance, polymorphism, templates, STL containers, iterators, smart pointers, lambdas, and move semantics. It is widely used for competitive programming, game engines, systems software, and high-performance applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "C++ is a general-purpose compiled language that extends C with object-oriented, generic, and modern programming features.",
        url: "https://en.wikipedia.org/wiki/c++_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Java Programming Language - Overview",
        content: "Java is a class-based object-oriented programming language designed around portability through the Java Virtual Machine. Core concepts include classes, interfaces, inheritance, exceptions, collections, generics, threads, streams, and garbage collection. Java is widely used for enterprise applications, Android development, backend services, and large distributed systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Java is a class-based object-oriented programming language designed around portability through the Java Virtual Machine.",
        url: "https://en.wikipedia.org/wiki/java_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Java Programming Language - Concepts and Applications",
        content: "Java is a class-based object-oriented programming language designed around portability through the Java Virtual Machine. Core concepts include classes, interfaces, inheritance, exceptions, collections, generics, threads, streams, and garbage collection. Java is widely used for enterprise applications, Android development, backend services, and large distributed systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Java is a class-based object-oriented programming language designed around portability through the Java Virtual Machine.",
        url: "https://en.wikipedia.org/wiki/java_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "TypeScript Programming Language - Overview",
        content: "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds interfaces, type aliases, generics, enums, union types, narrowing, and compile-time checking while compiling to JavaScript. TypeScript is widely used in large frontend and backend applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "TypeScript is a statically typed superset of JavaScript developed by Microsoft.",
        url: "https://en.wikipedia.org/wiki/typescript_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "TypeScript Programming Language - Concepts and Applications",
        content: "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds interfaces, type aliases, generics, enums, union types, narrowing, and compile-time checking while compiling to JavaScript. TypeScript is widely used in large frontend and backend applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "TypeScript is a statically typed superset of JavaScript developed by Microsoft.",
        url: "https://en.wikipedia.org/wiki/typescript_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Go Programming Language - Overview",
        content: "Go is a compiled language created at Google with a focus on simplicity, concurrency, and fast compilation. It includes goroutines, channels, interfaces, garbage collection, and a strong standard library. Go is popular for cloud services, networking software, command-line tools, and infrastructure. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Go is a compiled language created at Google with a focus on simplicity, concurrency, and fast compilation.",
        url: "https://en.wikipedia.org/wiki/go_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Go Programming Language - Concepts and Applications",
        content: "Go is a compiled language created at Google with a focus on simplicity, concurrency, and fast compilation. It includes goroutines, channels, interfaces, garbage collection, and a strong standard library. Go is popular for cloud services, networking software, command-line tools, and infrastructure. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Go is a compiled language created at Google with a focus on simplicity, concurrency, and fast compilation.",
        url: "https://en.wikipedia.org/wiki/go_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Rust Programming Language - Overview",
        content: "Rust is a systems programming language focused on memory safety, performance, and concurrency without a traditional garbage collector. Its ownership, borrowing, and lifetime systems prevent many classes of memory errors at compile time. Rust is used for operating systems, developer tools, browsers, networking, and high-performance services. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Rust is a systems programming language focused on memory safety, performance, and concurrency without a traditional garbage collector.",
        url: "https://en.wikipedia.org/wiki/rust_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Rust Programming Language - Concepts and Applications",
        content: "Rust is a systems programming language focused on memory safety, performance, and concurrency without a traditional garbage collector. Its ownership, borrowing, and lifetime systems prevent many classes of memory errors at compile time. Rust is used for operating systems, developer tools, browsers, networking, and high-performance services. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Rust is a systems programming language focused on memory safety, performance, and concurrency without a traditional garbage collector.",
        url: "https://en.wikipedia.org/wiki/rust_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Kotlin Programming Language - Overview",
        content: "Kotlin is a modern statically typed language developed by JetBrains. It supports object-oriented and functional programming, null safety, extension functions, coroutines, and concise syntax. Kotlin is widely used for Android development and JVM backend applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Kotlin is a modern statically typed language developed by JetBrains.",
        url: "https://en.wikipedia.org/wiki/kotlin_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Kotlin Programming Language - Concepts and Applications",
        content: "Kotlin is a modern statically typed language developed by JetBrains. It supports object-oriented and functional programming, null safety, extension functions, coroutines, and concise syntax. Kotlin is widely used for Android development and JVM backend applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Kotlin is a modern statically typed language developed by JetBrains.",
        url: "https://en.wikipedia.org/wiki/kotlin_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "PHP Programming Language - Overview",
        content: "PHP is a server-side scripting language widely used for web development. It integrates closely with HTML and supports databases, sessions, authentication, APIs, and object-oriented programming. PHP powers many websites and platforms including WordPress-based applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "PHP is a server-side scripting language widely used for web development.",
        url: "https://en.wikipedia.org/wiki/php_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "PHP Programming Language - Concepts and Applications",
        content: "PHP is a server-side scripting language widely used for web development. It integrates closely with HTML and supports databases, sessions, authentication, APIs, and object-oriented programming. PHP powers many websites and platforms including WordPress-based applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "PHP is a server-side scripting language widely used for web development.",
        url: "https://en.wikipedia.org/wiki/php_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Ruby Programming Language - Overview",
        content: "Ruby is a dynamic object-oriented programming language designed for programmer productivity and expressive syntax. Ruby on Rails made Ruby particularly influential in web application development. Ruby supports blocks, mixins, metaprogramming, and automatic memory management. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Ruby is a dynamic object-oriented programming language designed for programmer productivity and expressive syntax.",
        url: "https://en.wikipedia.org/wiki/ruby_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Ruby Programming Language - Concepts and Applications",
        content: "Ruby is a dynamic object-oriented programming language designed for programmer productivity and expressive syntax. Ruby on Rails made Ruby particularly influential in web application development. Ruby supports blocks, mixins, metaprogramming, and automatic memory management. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Ruby is a dynamic object-oriented programming language designed for programmer productivity and expressive syntax.",
        url: "https://en.wikipedia.org/wiki/ruby_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Swift Programming Language - Overview",
        content: "Swift is a compiled programming language developed by Apple for software across its platforms. It combines strong static typing, optionals, protocols, generics, closures, and memory safety. Swift is commonly used for iOS, macOS, watchOS, and tvOS applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Swift is a compiled programming language developed by Apple for software across its platforms.",
        url: "https://en.wikipedia.org/wiki/swift_programming_language_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Swift Programming Language - Concepts and Applications",
        content: "Swift is a compiled programming language developed by Apple for software across its platforms. It combines strong static typing, optionals, protocols, generics, closures, and memory safety. Swift is commonly used for iOS, macOS, watchOS, and tvOS applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Swift is a compiled programming language developed by Apple for software across its platforms.",
        url: "https://en.wikipedia.org/wiki/swift_programming_language_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Data Structures - Overview",
        content: "Data structures organize data so that operations such as searching, insertion, deletion, and traversal can be performed efficiently. Common structures include arrays, linked lists, stacks, queues, hash tables, trees, heaps, graphs, and tries. Choosing an appropriate data structure is central to algorithm design. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Data structures organize data so that operations such as searching, insertion, deletion, and traversal can be performed efficiently.",
        url: "https://en.wikipedia.org/wiki/data_structures_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Data Structures - Concepts and Applications",
        content: "Data structures organize data so that operations such as searching, insertion, deletion, and traversal can be performed efficiently. Common structures include arrays, linked lists, stacks, queues, hash tables, trees, heaps, graphs, and tries. Choosing an appropriate data structure is central to algorithm design. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Data structures organize data so that operations such as searching, insertion, deletion, and traversal can be performed efficiently.",
        url: "https://en.wikipedia.org/wiki/data_structures_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Algorithms - Overview",
        content: "An algorithm is a finite sequence of well-defined steps for solving a problem or performing a computation. Algorithm analysis commonly considers time complexity and space complexity using asymptotic notation such as Big O. Important techniques include sorting, searching, recursion, divide and conquer, greedy algorithms, dynamic programming, and graph algorithms. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An algorithm is a finite sequence of well-defined steps for solving a problem or performing a computation.",
        url: "https://en.wikipedia.org/wiki/algorithms_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Algorithms - Concepts and Applications",
        content: "An algorithm is a finite sequence of well-defined steps for solving a problem or performing a computation. Algorithm analysis commonly considers time complexity and space complexity using asymptotic notation such as Big O. Important techniques include sorting, searching, recursion, divide and conquer, greedy algorithms, dynamic programming, and graph algorithms. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An algorithm is a finite sequence of well-defined steps for solving a problem or performing a computation.",
        url: "https://en.wikipedia.org/wiki/algorithms_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Object-Oriented Programming - Overview",
        content: "Object-oriented programming organizes software around objects containing data and behavior. Its major principles are encapsulation, abstraction, inheritance, and polymorphism. OOP is used to model complex systems and promote modularity, reuse, and maintainability. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Object-oriented programming organizes software around objects containing data and behavior.",
        url: "https://en.wikipedia.org/wiki/object-oriented_programming_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Object-Oriented Programming - Concepts and Applications",
        content: "Object-oriented programming organizes software around objects containing data and behavior. Its major principles are encapsulation, abstraction, inheritance, and polymorphism. OOP is used to model complex systems and promote modularity, reuse, and maintainability. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Object-oriented programming organizes software around objects containing data and behavior.",
        url: "https://en.wikipedia.org/wiki/object-oriented_programming_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Functional Programming - Overview",
        content: "Functional programming treats computation as evaluation of functions and emphasizes immutability, composition, higher-order functions, and avoiding shared mutable state. Languages such as Haskell emphasize the paradigm, while JavaScript, Python, Scala, Kotlin, and many others provide functional features. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Functional programming treats computation as evaluation of functions and emphasizes immutability, composition, higher-order functions, and avoiding shared mutable state.",
        url: "https://en.wikipedia.org/wiki/functional_programming_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Functional Programming - Concepts and Applications",
        content: "Functional programming treats computation as evaluation of functions and emphasizes immutability, composition, higher-order functions, and avoiding shared mutable state. Languages such as Haskell emphasize the paradigm, while JavaScript, Python, Scala, Kotlin, and many others provide functional features. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Functional programming treats computation as evaluation of functions and emphasizes immutability, composition, higher-order functions, and avoiding shared mutable state.",
        url: "https://en.wikipedia.org/wiki/functional_programming_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Compiler - Overview",
        content: "A compiler translates source code written in one programming language into another form, commonly machine code or intermediate representation. Major compiler stages include lexical analysis, syntax analysis, semantic analysis, intermediate representation, optimization, and code generation. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A compiler translates source code written in one programming language into another form, commonly machine code or intermediate representation.",
        url: "https://en.wikipedia.org/wiki/compiler_-_overview",
        fileType: 'WEB',
    },
    // PROGRAMMING & SOFTWARE
    {
        title: "Compiler - Concepts and Applications",
        content: "A compiler translates source code written in one programming language into another form, commonly machine code or intermediate representation. Major compiler stages include lexical analysis, syntax analysis, semantic analysis, intermediate representation, optimization, and code generation. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A compiler translates source code written in one programming language into another form, commonly machine code or intermediate representation.",
        url: "https://en.wikipedia.org/wiki/compiler_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "MySQL Database - Overview",
        content: "MySQL is an open-source relational database management system that uses SQL for defining, querying, and modifying structured data. It supports indexes, transactions, constraints, joins, stored procedures, replication, and multiple storage engines. MySQL is widely used in web applications and enterprise systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "MySQL is an open-source relational database management system that uses SQL for defining, querying, and modifying structured data.",
        url: "https://en.wikipedia.org/wiki/mysql_database_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "MySQL Database - Concepts and Applications",
        content: "MySQL is an open-source relational database management system that uses SQL for defining, querying, and modifying structured data. It supports indexes, transactions, constraints, joins, stored procedures, replication, and multiple storage engines. MySQL is widely used in web applications and enterprise systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "MySQL is an open-source relational database management system that uses SQL for defining, querying, and modifying structured data.",
        url: "https://en.wikipedia.org/wiki/mysql_database_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "PostgreSQL Database - Overview",
        content: "PostgreSQL is an open-source object-relational database known for standards compliance and advanced features. It supports transactions, complex queries, JSON, arrays, full-text search, extensions, indexes, and powerful analytical capabilities. PostgreSQL is widely used for modern web, enterprise, and data-intensive applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "PostgreSQL is an open-source object-relational database known for standards compliance and advanced features.",
        url: "https://en.wikipedia.org/wiki/postgresql_database_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "PostgreSQL Database - Concepts and Applications",
        content: "PostgreSQL is an open-source object-relational database known for standards compliance and advanced features. It supports transactions, complex queries, JSON, arrays, full-text search, extensions, indexes, and powerful analytical capabilities. PostgreSQL is widely used for modern web, enterprise, and data-intensive applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "PostgreSQL is an open-source object-relational database known for standards compliance and advanced features.",
        url: "https://en.wikipedia.org/wiki/postgresql_database_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "MongoDB Database - Overview",
        content: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents. It provides flexible schemas, indexes, aggregation pipelines, replication, and sharding. MongoDB is often used when applications need flexible document structures and horizontal scalability. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents.",
        url: "https://en.wikipedia.org/wiki/mongodb_database_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "MongoDB Database - Concepts and Applications",
        content: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents. It provides flexible schemas, indexes, aggregation pipelines, replication, and sharding. MongoDB is often used when applications need flexible document structures and horizontal scalability. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "MongoDB is a document-oriented NoSQL database that stores records as BSON documents.",
        url: "https://en.wikipedia.org/wiki/mongodb_database_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Redis In-Memory Database - Overview",
        content: "Redis is an in-memory data structure server commonly used for caching, sessions, queues, rate limiting, and real-time applications. It supports strings, lists, sets, sorted sets, hashes, streams, and other structures. Persistence and replication options allow Redis to be used beyond simple caching. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Redis is an in-memory data structure server commonly used for caching, sessions, queues, rate limiting, and real-time applications.",
        url: "https://en.wikipedia.org/wiki/redis_in-memory_database_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Redis In-Memory Database - Concepts and Applications",
        content: "Redis is an in-memory data structure server commonly used for caching, sessions, queues, rate limiting, and real-time applications. It supports strings, lists, sets, sorted sets, hashes, streams, and other structures. Persistence and replication options allow Redis to be used beyond simple caching. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Redis is an in-memory data structure server commonly used for caching, sessions, queues, rate limiting, and real-time applications.",
        url: "https://en.wikipedia.org/wiki/redis_in-memory_database_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Normalization - Overview",
        content: "Database normalization is a design process that reduces redundancy and update anomalies in relational databases. Normal forms include first normal form, second normal form, third normal form, and Boyce-Codd normal form. Normalization generally separates data into related tables connected through keys. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Database normalization is a design process that reduces redundancy and update anomalies in relational databases.",
        url: "https://en.wikipedia.org/wiki/database_normalization_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Normalization - Concepts and Applications",
        content: "Database normalization is a design process that reduces redundancy and update anomalies in relational databases. Normal forms include first normal form, second normal form, third normal form, and Boyce-Codd normal form. Normalization generally separates data into related tables connected through keys. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Database normalization is a design process that reduces redundancy and update anomalies in relational databases.",
        url: "https://en.wikipedia.org/wiki/database_normalization_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "SQL Joins - Overview",
        content: "SQL joins combine rows from multiple relational tables using related columns or conditions. Common types are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN. Joins are fundamental for retrieving related information stored in normalized databases. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "SQL joins combine rows from multiple relational tables using related columns or conditions.",
        url: "https://en.wikipedia.org/wiki/sql_joins_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "SQL Joins - Concepts and Applications",
        content: "SQL joins combine rows from multiple relational tables using related columns or conditions. Common types are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN. Joins are fundamental for retrieving related information stored in normalized databases. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "SQL joins combine rows from multiple relational tables using related columns or conditions.",
        url: "https://en.wikipedia.org/wiki/sql_joins_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Indexing - Overview",
        content: "A database index is an auxiliary data structure that accelerates data retrieval by allowing the database engine to avoid scanning every row. Common index structures include B-trees and hash indexes. Indexes improve reads but consume storage and can increase the cost of writes. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A database index is an auxiliary data structure that accelerates data retrieval by allowing the database engine to avoid scanning every row.",
        url: "https://en.wikipedia.org/wiki/database_indexing_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Indexing - Concepts and Applications",
        content: "A database index is an auxiliary data structure that accelerates data retrieval by allowing the database engine to avoid scanning every row. Common index structures include B-trees and hash indexes. Indexes improve reads but consume storage and can increase the cost of writes. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A database index is an auxiliary data structure that accelerates data retrieval by allowing the database engine to avoid scanning every row.",
        url: "https://en.wikipedia.org/wiki/database_indexing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "ACID Transactions - Overview",
        content: "ACID describes four properties expected from reliable database transactions: atomicity, consistency, isolation, and durability. Atomicity means a transaction succeeds completely or not at all, while durability ensures committed changes survive failures. Isolation controls how concurrent transactions interact. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "ACID describes four properties expected from reliable database transactions: atomicity, consistency, isolation, and durability.",
        url: "https://en.wikipedia.org/wiki/acid_transactions_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "ACID Transactions - Concepts and Applications",
        content: "ACID describes four properties expected from reliable database transactions: atomicity, consistency, isolation, and durability. Atomicity means a transaction succeeds completely or not at all, while durability ensures committed changes survive failures. Isolation controls how concurrent transactions interact. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "ACID describes four properties expected from reliable database transactions: atomicity, consistency, isolation, and durability.",
        url: "https://en.wikipedia.org/wiki/acid_transactions_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Sharding - Overview",
        content: "Database sharding horizontally partitions data across multiple database servers or nodes. A shard key determines where records are stored. Sharding can increase storage capacity and throughput but introduces complexity around routing, balancing, transactions, and cross-shard queries. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Database sharding horizontally partitions data across multiple database servers or nodes.",
        url: "https://en.wikipedia.org/wiki/database_sharding_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Database Sharding - Concepts and Applications",
        content: "Database sharding horizontally partitions data across multiple database servers or nodes. A shard key determines where records are stored. Sharding can increase storage capacity and throughput but introduces complexity around routing, balancing, transactions, and cross-shard queries. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Database sharding horizontally partitions data across multiple database servers or nodes.",
        url: "https://en.wikipedia.org/wiki/database_sharding_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Data Warehousing - Overview",
        content: "A data warehouse is a centralized system designed for analytical queries and reporting rather than transactional workloads. Data is commonly extracted from operational systems, transformed, and loaded into analytical storage. Warehouses support business intelligence, dashboards, historical analysis, and decision making. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A data warehouse is a centralized system designed for analytical queries and reporting rather than transactional workloads.",
        url: "https://en.wikipedia.org/wiki/data_warehousing_-_overview",
        fileType: 'WEB',
    },
    // DATABASES & DATA
    {
        title: "Data Warehousing - Concepts and Applications",
        content: "A data warehouse is a centralized system designed for analytical queries and reporting rather than transactional workloads. Data is commonly extracted from operational systems, transformed, and loaded into analytical storage. Warehouses support business intelligence, dashboards, historical analysis, and decision making. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A data warehouse is a centralized system designed for analytical queries and reporting rather than transactional workloads.",
        url: "https://en.wikipedia.org/wiki/data_warehousing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "HTML - Overview",
        content: "HTML is the standard markup language used to structure documents on the web. It defines headings, paragraphs, links, images, forms, tables, semantic sections, and other elements. Browsers parse HTML to construct the document structure used to render web pages. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "HTML is the standard markup language used to structure documents on the web.",
        url: "https://en.wikipedia.org/wiki/html_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "HTML - Concepts and Applications",
        content: "HTML is the standard markup language used to structure documents on the web. It defines headings, paragraphs, links, images, forms, tables, semantic sections, and other elements. Browsers parse HTML to construct the document structure used to render web pages. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "HTML is the standard markup language used to structure documents on the web.",
        url: "https://en.wikipedia.org/wiki/html_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "CSS - Overview",
        content: "CSS is a stylesheet language used to control the presentation of HTML and other web documents. It handles colors, typography, spacing, layouts, animations, responsive design, and visual effects. Modern CSS includes Flexbox, Grid, custom properties, media queries, and container queries. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "CSS is a stylesheet language used to control the presentation of HTML and other web documents.",
        url: "https://en.wikipedia.org/wiki/css_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "CSS - Concepts and Applications",
        content: "CSS is a stylesheet language used to control the presentation of HTML and other web documents. It handles colors, typography, spacing, layouts, animations, responsive design, and visual effects. Modern CSS includes Flexbox, Grid, custom properties, media queries, and container queries. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "CSS is a stylesheet language used to control the presentation of HTML and other web documents.",
        url: "https://en.wikipedia.org/wiki/css_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "HTTP Protocol - Overview",
        content: "HTTP is an application-layer protocol used for communication between clients and servers on the web. Common methods include GET, POST, PUT, PATCH, and DELETE, while status codes communicate outcomes such as success, redirection, client errors, and server errors. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "HTTP is an application-layer protocol used for communication between clients and servers on the web.",
        url: "https://en.wikipedia.org/wiki/http_protocol_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "HTTP Protocol - Concepts and Applications",
        content: "HTTP is an application-layer protocol used for communication between clients and servers on the web. Common methods include GET, POST, PUT, PATCH, and DELETE, while status codes communicate outcomes such as success, redirection, client errors, and server errors. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "HTTP is an application-layer protocol used for communication between clients and servers on the web.",
        url: "https://en.wikipedia.org/wiki/http_protocol_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "REST API - Overview",
        content: "REST is an architectural style for networked applications that commonly uses HTTP resources and standard methods. REST APIs often represent resources with URLs and exchange JSON representations. Good API design considers resource naming, status codes, validation, pagination, authentication, and versioning. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "REST is an architectural style for networked applications that commonly uses HTTP resources and standard methods.",
        url: "https://en.wikipedia.org/wiki/rest_api_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "REST API - Concepts and Applications",
        content: "REST is an architectural style for networked applications that commonly uses HTTP resources and standard methods. REST APIs often represent resources with URLs and exchange JSON representations. Good API design considers resource naming, status codes, validation, pagination, authentication, and versioning. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "REST is an architectural style for networked applications that commonly uses HTTP resources and standard methods.",
        url: "https://en.wikipedia.org/wiki/rest_api_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "GraphQL - Overview",
        content: "GraphQL is a query language and runtime for APIs that allows clients to request the exact fields they need. A GraphQL API typically exposes a schema containing types, queries, mutations, and optionally subscriptions. It can reduce over-fetching and under-fetching compared with some REST designs. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "GraphQL is a query language and runtime for APIs that allows clients to request the exact fields they need.",
        url: "https://en.wikipedia.org/wiki/graphql_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "GraphQL - Concepts and Applications",
        content: "GraphQL is a query language and runtime for APIs that allows clients to request the exact fields they need. A GraphQL API typically exposes a schema containing types, queries, mutations, and optionally subscriptions. It can reduce over-fetching and under-fetching compared with some REST designs. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "GraphQL is a query language and runtime for APIs that allows clients to request the exact fields they need.",
        url: "https://en.wikipedia.org/wiki/graphql_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "WebSockets - Overview",
        content: "WebSockets provide a persistent, bidirectional communication channel between a client and server. Unlike normal request-response HTTP interactions, either side can send messages after the connection is established. WebSockets are useful for chat, live notifications, multiplayer games, and real-time dashboards. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "WebSockets provide a persistent, bidirectional communication channel between a client and server.",
        url: "https://en.wikipedia.org/wiki/websockets_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "WebSockets - Concepts and Applications",
        content: "WebSockets provide a persistent, bidirectional communication channel between a client and server. Unlike normal request-response HTTP interactions, either side can send messages after the connection is established. WebSockets are useful for chat, live notifications, multiplayer games, and real-time dashboards. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "WebSockets provide a persistent, bidirectional communication channel between a client and server.",
        url: "https://en.wikipedia.org/wiki/websockets_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Authentication - Overview",
        content: "Authentication verifies the identity of a user or system. Common mechanisms include passwords, session cookies, access tokens, OAuth, passkeys, and multi-factor authentication. Secure authentication requires careful credential storage, transport security, expiration, and recovery mechanisms. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Authentication verifies the identity of a user or system.",
        url: "https://en.wikipedia.org/wiki/authentication_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Authentication - Concepts and Applications",
        content: "Authentication verifies the identity of a user or system. Common mechanisms include passwords, session cookies, access tokens, OAuth, passkeys, and multi-factor authentication. Secure authentication requires careful credential storage, transport security, expiration, and recovery mechanisms. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Authentication verifies the identity of a user or system.",
        url: "https://en.wikipedia.org/wiki/authentication_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Authorization - Overview",
        content: "Authorization determines what an authenticated identity is allowed to access or perform. Models include role-based access control, attribute-based access control, and permission-based systems. Authorization checks should be enforced on the server rather than relying only on frontend restrictions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Authorization determines what an authenticated identity is allowed to access or perform.",
        url: "https://en.wikipedia.org/wiki/authorization_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Authorization - Concepts and Applications",
        content: "Authorization determines what an authenticated identity is allowed to access or perform. Models include role-based access control, attribute-based access control, and permission-based systems. Authorization checks should be enforced on the server rather than relying only on frontend restrictions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Authorization determines what an authenticated identity is allowed to access or perform.",
        url: "https://en.wikipedia.org/wiki/authorization_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "JSON - Overview",
        content: "JSON is a lightweight text format commonly used to exchange structured data between web clients and servers. It represents objects, arrays, strings, numbers, booleans, and null values. JSON is widely supported across programming languages and web APIs. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "JSON is a lightweight text format commonly used to exchange structured data between web clients and servers.",
        url: "https://en.wikipedia.org/wiki/json_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "JSON - Concepts and Applications",
        content: "JSON is a lightweight text format commonly used to exchange structured data between web clients and servers. It represents objects, arrays, strings, numbers, booleans, and null values. JSON is widely supported across programming languages and web APIs. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "JSON is a lightweight text format commonly used to exchange structured data between web clients and servers.",
        url: "https://en.wikipedia.org/wiki/json_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Browser - Overview",
        content: "A web browser is software that retrieves, interprets, and displays web resources. Major browser components include networking, HTML parsing, CSS processing, JavaScript execution, rendering, storage, and security isolation. Examples include Chrome, Firefox, Safari, and Edge. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A web browser is software that retrieves, interprets, and displays web resources.",
        url: "https://en.wikipedia.org/wiki/browser_-_overview",
        fileType: 'WEB',
    },
    // WEB DEVELOPMENT
    {
        title: "Browser - Concepts and Applications",
        content: "A web browser is software that retrieves, interprets, and displays web resources. Major browser components include networking, HTML parsing, CSS processing, JavaScript execution, rendering, storage, and security isolation. Examples include Chrome, Firefox, Safari, and Edge. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A web browser is software that retrieves, interprets, and displays web resources.",
        url: "https://en.wikipedia.org/wiki/browser_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Artificial Neural Network - Overview",
        content: "An artificial neural network is a computational model composed of interconnected units organized into layers. During training, model parameters are adjusted to reduce an objective function. Neural networks are used for classification, regression, generation, recommendation, and many other machine learning tasks. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An artificial neural network is a computational model composed of interconnected units organized into layers.",
        url: "https://en.wikipedia.org/wiki/artificial_neural_network_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Artificial Neural Network - Concepts and Applications",
        content: "An artificial neural network is a computational model composed of interconnected units organized into layers. During training, model parameters are adjusted to reduce an objective function. Neural networks are used for classification, regression, generation, recommendation, and many other machine learning tasks. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An artificial neural network is a computational model composed of interconnected units organized into layers.",
        url: "https://en.wikipedia.org/wiki/artificial_neural_network_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Supervised Learning - Overview",
        content: "Supervised learning trains a model using labeled examples containing inputs and desired outputs. Common tasks include classification and regression. Typical algorithms include linear regression, logistic regression, decision trees, support vector machines, and neural networks. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Supervised learning trains a model using labeled examples containing inputs and desired outputs.",
        url: "https://en.wikipedia.org/wiki/supervised_learning_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Supervised Learning - Concepts and Applications",
        content: "Supervised learning trains a model using labeled examples containing inputs and desired outputs. Common tasks include classification and regression. Typical algorithms include linear regression, logistic regression, decision trees, support vector machines, and neural networks. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Supervised learning trains a model using labeled examples containing inputs and desired outputs.",
        url: "https://en.wikipedia.org/wiki/supervised_learning_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Unsupervised Learning - Overview",
        content: "Unsupervised learning discovers patterns in data without explicit target labels. Clustering, dimensionality reduction, density estimation, and representation learning are common examples. K-means and principal component analysis are widely taught techniques. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Unsupervised learning discovers patterns in data without explicit target labels.",
        url: "https://en.wikipedia.org/wiki/unsupervised_learning_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Unsupervised Learning - Concepts and Applications",
        content: "Unsupervised learning discovers patterns in data without explicit target labels. Clustering, dimensionality reduction, density estimation, and representation learning are common examples. K-means and principal component analysis are widely taught techniques. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Unsupervised learning discovers patterns in data without explicit target labels.",
        url: "https://en.wikipedia.org/wiki/unsupervised_learning_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Reinforcement Learning - Overview",
        content: "Reinforcement learning studies how an agent learns actions through interaction with an environment and feedback in the form of rewards. Important concepts include states, actions, policies, value functions, exploration, and exploitation. Applications include robotics, games, optimization, and recommendation. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Reinforcement learning studies how an agent learns actions through interaction with an environment and feedback in the form of rewards.",
        url: "https://en.wikipedia.org/wiki/reinforcement_learning_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Reinforcement Learning - Concepts and Applications",
        content: "Reinforcement learning studies how an agent learns actions through interaction with an environment and feedback in the form of rewards. Important concepts include states, actions, policies, value functions, exploration, and exploitation. Applications include robotics, games, optimization, and recommendation. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Reinforcement learning studies how an agent learns actions through interaction with an environment and feedback in the form of rewards.",
        url: "https://en.wikipedia.org/wiki/reinforcement_learning_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Natural Language Processing - Overview",
        content: "Natural language processing enables computers to process and generate human language. Tasks include tokenization, classification, translation, summarization, question answering, speech processing, and information extraction. Modern NLP relies heavily on transformer-based neural networks. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Natural language processing enables computers to process and generate human language.",
        url: "https://en.wikipedia.org/wiki/natural_language_processing_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Natural Language Processing - Concepts and Applications",
        content: "Natural language processing enables computers to process and generate human language. Tasks include tokenization, classification, translation, summarization, question answering, speech processing, and information extraction. Modern NLP relies heavily on transformer-based neural networks. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Natural language processing enables computers to process and generate human language.",
        url: "https://en.wikipedia.org/wiki/natural_language_processing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Computer Vision - Overview",
        content: "Computer vision enables computers to interpret visual information from images and video. Tasks include image classification, object detection, segmentation, tracking, optical character recognition, and image generation. Convolutional networks and vision transformers are common architectures. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Computer vision enables computers to interpret visual information from images and video.",
        url: "https://en.wikipedia.org/wiki/computer_vision_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Computer Vision - Concepts and Applications",
        content: "Computer vision enables computers to interpret visual information from images and video. Tasks include image classification, object detection, segmentation, tracking, optical character recognition, and image generation. Convolutional networks and vision transformers are common architectures. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Computer vision enables computers to interpret visual information from images and video.",
        url: "https://en.wikipedia.org/wiki/computer_vision_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Transformer Architecture - Overview",
        content: "The transformer is a neural network architecture based primarily on attention mechanisms rather than recurrence. It uses components such as self-attention, feed-forward layers, positional information, residual connections, and normalization. Transformers have become central to modern language and multimodal AI systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The transformer is a neural network architecture based primarily on attention mechanisms rather than recurrence.",
        url: "https://en.wikipedia.org/wiki/transformer_architecture_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Transformer Architecture - Concepts and Applications",
        content: "The transformer is a neural network architecture based primarily on attention mechanisms rather than recurrence. It uses components such as self-attention, feed-forward layers, positional information, residual connections, and normalization. Transformers have become central to modern language and multimodal AI systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The transformer is a neural network architecture based primarily on attention mechanisms rather than recurrence.",
        url: "https://en.wikipedia.org/wiki/transformer_architecture_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Large Language Model - Overview",
        content: "A large language model is a neural network trained on large collections of text to learn statistical patterns of language. Modern LLMs commonly use transformer architectures and can perform generation, summarization, reasoning-like tasks, coding assistance, and question answering. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A large language model is a neural network trained on large collections of text to learn statistical patterns of language.",
        url: "https://en.wikipedia.org/wiki/large_language_model_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Large Language Model - Concepts and Applications",
        content: "A large language model is a neural network trained on large collections of text to learn statistical patterns of language. Modern LLMs commonly use transformer architectures and can perform generation, summarization, reasoning-like tasks, coding assistance, and question answering. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A large language model is a neural network trained on large collections of text to learn statistical patterns of language.",
        url: "https://en.wikipedia.org/wiki/large_language_model_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Generative AI - Overview",
        content: "Generative artificial intelligence refers to models capable of producing new content such as text, images, audio, video, or code. Common techniques include transformers, diffusion models, variational methods, and generative adversarial networks. Generative AI systems require evaluation for accuracy, safety, bias, and misuse. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Generative artificial intelligence refers to models capable of producing new content such as text, images, audio, video, or code.",
        url: "https://en.wikipedia.org/wiki/generative_ai_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Generative AI - Concepts and Applications",
        content: "Generative artificial intelligence refers to models capable of producing new content such as text, images, audio, video, or code. Common techniques include transformers, diffusion models, variational methods, and generative adversarial networks. Generative AI systems require evaluation for accuracy, safety, bias, and misuse. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Generative artificial intelligence refers to models capable of producing new content such as text, images, audio, video, or code.",
        url: "https://en.wikipedia.org/wiki/generative_ai_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Machine Learning Evaluation - Overview",
        content: "Machine learning evaluation measures how well a model generalizes to unseen data. Classification metrics include accuracy, precision, recall, F1 score, ROC-AUC, and confusion matrices. Regression metrics include MAE, MSE, RMSE, and R-squared. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Machine learning evaluation measures how well a model generalizes to unseen data.",
        url: "https://en.wikipedia.org/wiki/machine_learning_evaluation_-_overview",
        fileType: 'WEB',
    },
    // AI & MACHINE LEARNING
    {
        title: "Machine Learning Evaluation - Concepts and Applications",
        content: "Machine learning evaluation measures how well a model generalizes to unseen data. Classification metrics include accuracy, precision, recall, F1 score, ROC-AUC, and confusion matrices. Regression metrics include MAE, MSE, RMSE, and R-squared. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Machine learning evaluation measures how well a model generalizes to unseen data.",
        url: "https://en.wikipedia.org/wiki/machine_learning_evaluation_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Operating System - Overview",
        content: "An operating system manages hardware resources and provides services for application programs. Core responsibilities include process management, memory management, file systems, device management, networking, security, and scheduling. Examples include Linux, Windows, macOS, Android, and iOS. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An operating system manages hardware resources and provides services for application programs.",
        url: "https://en.wikipedia.org/wiki/operating_system_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Operating System - Concepts and Applications",
        content: "An operating system manages hardware resources and provides services for application programs. Core responsibilities include process management, memory management, file systems, device management, networking, security, and scheduling. Examples include Linux, Windows, macOS, Android, and iOS. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An operating system manages hardware resources and provides services for application programs.",
        url: "https://en.wikipedia.org/wiki/operating_system_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Process Management - Overview",
        content: "A process is a program in execution together with its associated state and resources. Operating systems create, schedule, suspend, resume, and terminate processes. Process management also involves context switching, inter-process communication, synchronization, and resource allocation. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A process is a program in execution together with its associated state and resources.",
        url: "https://en.wikipedia.org/wiki/process_management_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Process Management - Concepts and Applications",
        content: "A process is a program in execution together with its associated state and resources. Operating systems create, schedule, suspend, resume, and terminate processes. Process management also involves context switching, inter-process communication, synchronization, and resource allocation. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A process is a program in execution together with its associated state and resources.",
        url: "https://en.wikipedia.org/wiki/process_management_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "CPU Scheduling - Overview",
        content: "CPU scheduling determines which ready process receives processor time. Common algorithms include First Come First Served, Shortest Job First, Shortest Remaining Time First, Round Robin, and priority scheduling. Scheduling goals can include throughput, response time, turnaround time, and fairness. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "CPU scheduling determines which ready process receives processor time.",
        url: "https://en.wikipedia.org/wiki/cpu_scheduling_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "CPU Scheduling - Concepts and Applications",
        content: "CPU scheduling determines which ready process receives processor time. Common algorithms include First Come First Served, Shortest Job First, Shortest Remaining Time First, Round Robin, and priority scheduling. Scheduling goals can include throughput, response time, turnaround time, and fairness. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "CPU scheduling determines which ready process receives processor time.",
        url: "https://en.wikipedia.org/wiki/cpu_scheduling_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Deadlock - Overview",
        content: "A deadlock occurs when processes are permanently waiting for resources held by one another. The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait. Systems can prevent, avoid, detect, and recover from deadlocks. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A deadlock occurs when processes are permanently waiting for resources held by one another.",
        url: "https://en.wikipedia.org/wiki/deadlock_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Deadlock - Concepts and Applications",
        content: "A deadlock occurs when processes are permanently waiting for resources held by one another. The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait. Systems can prevent, avoid, detect, and recover from deadlocks. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A deadlock occurs when processes are permanently waiting for resources held by one another.",
        url: "https://en.wikipedia.org/wiki/deadlock_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Virtual Memory - Overview",
        content: "Virtual memory provides processes with an address space that can be larger or differently organized than physical memory. Paging and page tables translate virtual addresses to physical frames. Virtual memory enables process isolation and allows inactive pages to be moved to secondary storage. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Virtual memory provides processes with an address space that can be larger or differently organized than physical memory.",
        url: "https://en.wikipedia.org/wiki/virtual_memory_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Virtual Memory - Concepts and Applications",
        content: "Virtual memory provides processes with an address space that can be larger or differently organized than physical memory. Paging and page tables translate virtual addresses to physical frames. Virtual memory enables process isolation and allows inactive pages to be moved to secondary storage. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Virtual memory provides processes with an address space that can be larger or differently organized than physical memory.",
        url: "https://en.wikipedia.org/wiki/virtual_memory_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Paging - Overview",
        content: "Paging divides virtual memory into fixed-size pages and physical memory into frames. A page table maps virtual page numbers to physical frame numbers. Paging avoids external fragmentation but introduces page-table overhead and may require mechanisms such as a translation lookaside buffer. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Paging divides virtual memory into fixed-size pages and physical memory into frames.",
        url: "https://en.wikipedia.org/wiki/paging_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Paging - Concepts and Applications",
        content: "Paging divides virtual memory into fixed-size pages and physical memory into frames. A page table maps virtual page numbers to physical frame numbers. Paging avoids external fragmentation but introduces page-table overhead and may require mechanisms such as a translation lookaside buffer. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Paging divides virtual memory into fixed-size pages and physical memory into frames.",
        url: "https://en.wikipedia.org/wiki/paging_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "File System - Overview",
        content: "A file system organizes persistent data into files and directories and manages metadata, allocation, access, and permissions. Common file systems include NTFS, ext4, APFS, XFS, and FAT variants. File systems must balance reliability, performance, storage efficiency, and recovery. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A file system organizes persistent data into files and directories and manages metadata, allocation, access, and permissions.",
        url: "https://en.wikipedia.org/wiki/file_system_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "File System - Concepts and Applications",
        content: "A file system organizes persistent data into files and directories and manages metadata, allocation, access, and permissions. Common file systems include NTFS, ext4, APFS, XFS, and FAT variants. File systems must balance reliability, performance, storage efficiency, and recovery. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A file system organizes persistent data into files and directories and manages metadata, allocation, access, and permissions.",
        url: "https://en.wikipedia.org/wiki/file_system_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Inter Process Communication - Overview",
        content: "Inter-process communication allows processes to exchange data and coordinate execution. Common mechanisms include pipes, message queues, shared memory, sockets, signals, and semaphores. The choice depends on data volume, synchronization requirements, and whether communication is local or networked. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Inter-process communication allows processes to exchange data and coordinate execution.",
        url: "https://en.wikipedia.org/wiki/inter_process_communication_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Inter Process Communication - Concepts and Applications",
        content: "Inter-process communication allows processes to exchange data and coordinate execution. Common mechanisms include pipes, message queues, shared memory, sockets, signals, and semaphores. The choice depends on data volume, synchronization requirements, and whether communication is local or networked. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Inter-process communication allows processes to exchange data and coordinate execution.",
        url: "https://en.wikipedia.org/wiki/inter_process_communication_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Synchronization - Overview",
        content: "Concurrent processes and threads may need synchronization to prevent race conditions and inconsistent shared state. Common primitives include mutexes, semaphores, monitors, condition variables, and atomic operations. Correct synchronization requires careful handling of ordering and resource ownership. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Concurrent processes and threads may need synchronization to prevent race conditions and inconsistent shared state.",
        url: "https://en.wikipedia.org/wiki/synchronization_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Synchronization - Concepts and Applications",
        content: "Concurrent processes and threads may need synchronization to prevent race conditions and inconsistent shared state. Common primitives include mutexes, semaphores, monitors, condition variables, and atomic operations. Correct synchronization requires careful handling of ordering and resource ownership. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Concurrent processes and threads may need synchronization to prevent race conditions and inconsistent shared state.",
        url: "https://en.wikipedia.org/wiki/synchronization_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Linux Kernel - Overview",
        content: "The Linux kernel is the core component of Linux operating systems and manages CPU scheduling, memory, devices, networking, filesystems, and system calls. It supports loadable modules and a wide range of hardware architectures. User programs interact with kernel services through system calls. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Linux kernel is the core component of Linux operating systems and manages CPU scheduling, memory, devices, networking, filesystems, and system calls.",
        url: "https://en.wikipedia.org/wiki/linux_kernel_-_overview",
        fileType: 'WEB',
    },
    // OPERATING SYSTEMS
    {
        title: "Linux Kernel - Concepts and Applications",
        content: "The Linux kernel is the core component of Linux operating systems and manages CPU scheduling, memory, devices, networking, filesystems, and system calls. It supports loadable modules and a wide range of hardware architectures. User programs interact with kernel services through system calls. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Linux kernel is the core component of Linux operating systems and manages CPU scheduling, memory, devices, networking, filesystems, and system calls.",
        url: "https://en.wikipedia.org/wiki/linux_kernel_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Computer Network - Overview",
        content: "A computer network connects devices so they can exchange information and share resources. Networks are built using protocols, addressing, routing, switching, and physical or wireless communication technologies. The Internet is the world's largest interconnected network. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A computer network connects devices so they can exchange information and share resources.",
        url: "https://en.wikipedia.org/wiki/computer_network_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Computer Network - Concepts and Applications",
        content: "A computer network connects devices so they can exchange information and share resources. Networks are built using protocols, addressing, routing, switching, and physical or wireless communication technologies. The Internet is the world's largest interconnected network. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A computer network connects devices so they can exchange information and share resources.",
        url: "https://en.wikipedia.org/wiki/computer_network_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "OSI Model - Overview",
        content: "The OSI model divides networking communication into seven conceptual layers: physical, data link, network, transport, session, presentation, and application. It is primarily a learning and troubleshooting framework. Real Internet protocols do not map perfectly to these layers. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The OSI model divides networking communication into seven conceptual layers: physical, data link, network, transport, session, presentation, and application.",
        url: "https://en.wikipedia.org/wiki/osi_model_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "OSI Model - Concepts and Applications",
        content: "The OSI model divides networking communication into seven conceptual layers: physical, data link, network, transport, session, presentation, and application. It is primarily a learning and troubleshooting framework. Real Internet protocols do not map perfectly to these layers. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The OSI model divides networking communication into seven conceptual layers: physical, data link, network, transport, session, presentation, and application.",
        url: "https://en.wikipedia.org/wiki/osi_model_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "TCP Protocol - Overview",
        content: "Transmission Control Protocol provides reliable, ordered, connection-oriented byte-stream communication. It uses mechanisms such as sequence numbers, acknowledgments, retransmission, flow control, and congestion control. TCP is used by protocols including HTTP and many application services. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Transmission Control Protocol provides reliable, ordered, connection-oriented byte-stream communication.",
        url: "https://en.wikipedia.org/wiki/tcp_protocol_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "TCP Protocol - Concepts and Applications",
        content: "Transmission Control Protocol provides reliable, ordered, connection-oriented byte-stream communication. It uses mechanisms such as sequence numbers, acknowledgments, retransmission, flow control, and congestion control. TCP is used by protocols including HTTP and many application services. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Transmission Control Protocol provides reliable, ordered, connection-oriented byte-stream communication.",
        url: "https://en.wikipedia.org/wiki/tcp_protocol_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "UDP Protocol - Overview",
        content: "User Datagram Protocol is a connectionless transport protocol with low overhead. It does not guarantee delivery, ordering, or duplicate suppression. UDP is useful for applications where low latency is important or where the application implements its own reliability. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "User Datagram Protocol is a connectionless transport protocol with low overhead.",
        url: "https://en.wikipedia.org/wiki/udp_protocol_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "UDP Protocol - Concepts and Applications",
        content: "User Datagram Protocol is a connectionless transport protocol with low overhead. It does not guarantee delivery, ordering, or duplicate suppression. UDP is useful for applications where low latency is important or where the application implements its own reliability. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "User Datagram Protocol is a connectionless transport protocol with low overhead.",
        url: "https://en.wikipedia.org/wiki/udp_protocol_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "IP Address - Overview",
        content: "An IP address identifies an interface or endpoint within an IP network. IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses. Addressing supports routing and can be organized into subnets and prefixes. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An IP address identifies an interface or endpoint within an IP network.",
        url: "https://en.wikipedia.org/wiki/ip_address_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "IP Address - Concepts and Applications",
        content: "An IP address identifies an interface or endpoint within an IP network. IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses. Addressing supports routing and can be organized into subnets and prefixes. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An IP address identifies an interface or endpoint within an IP network.",
        url: "https://en.wikipedia.org/wiki/ip_address_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "DNS - Overview",
        content: "The Domain Name System translates human-readable domain names into information such as IP addresses. DNS is hierarchical and includes root servers, top-level domains, authoritative servers, and recursive resolvers. Caching reduces latency and traffic. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Domain Name System translates human-readable domain names into information such as IP addresses.",
        url: "https://en.wikipedia.org/wiki/dns_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "DNS - Concepts and Applications",
        content: "The Domain Name System translates human-readable domain names into information such as IP addresses. DNS is hierarchical and includes root servers, top-level domains, authoritative servers, and recursive resolvers. Caching reduces latency and traffic. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Domain Name System translates human-readable domain names into information such as IP addresses.",
        url: "https://en.wikipedia.org/wiki/dns_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "HTTP and HTTPS - Overview",
        content: "HTTPS is HTTP transmitted over a secure TLS connection. TLS provides encryption, integrity protection, and server authentication using certificates. HTTPS protects web traffic from many forms of passive interception and active tampering. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "HTTPS is HTTP transmitted over a secure TLS connection.",
        url: "https://en.wikipedia.org/wiki/http_and_https_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "HTTP and HTTPS - Concepts and Applications",
        content: "HTTPS is HTTP transmitted over a secure TLS connection. TLS provides encryption, integrity protection, and server authentication using certificates. HTTPS protects web traffic from many forms of passive interception and active tampering. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "HTTPS is HTTP transmitted over a secure TLS connection.",
        url: "https://en.wikipedia.org/wiki/http_and_https_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Router - Overview",
        content: "A router forwards packets between different networks using routing information. It examines destination addresses and selects an appropriate next hop. Routers may support routing protocols, network address translation, access control, and quality-of-service features. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A router forwards packets between different networks using routing information.",
        url: "https://en.wikipedia.org/wiki/router_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Router - Concepts and Applications",
        content: "A router forwards packets between different networks using routing information. It examines destination addresses and selects an appropriate next hop. Routers may support routing protocols, network address translation, access control, and quality-of-service features. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A router forwards packets between different networks using routing information.",
        url: "https://en.wikipedia.org/wiki/router_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Network Switch - Overview",
        content: "A network switch connects devices within a local network and forwards Ethernet frames based on MAC addresses. Modern switches can support VLANs, link aggregation, spanning tree protocols, and management features. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A network switch connects devices within a local network and forwards Ethernet frames based on MAC addresses.",
        url: "https://en.wikipedia.org/wiki/network_switch_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Network Switch - Concepts and Applications",
        content: "A network switch connects devices within a local network and forwards Ethernet frames based on MAC addresses. Modern switches can support VLANs, link aggregation, spanning tree protocols, and management features. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A network switch connects devices within a local network and forwards Ethernet frames based on MAC addresses.",
        url: "https://en.wikipedia.org/wiki/network_switch_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Network Security - Overview",
        content: "Network security protects communication infrastructure and traffic against unauthorized access, disruption, and abuse. Common technologies include firewalls, VPNs, intrusion detection, intrusion prevention, segmentation, encryption, and secure authentication. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Network security protects communication infrastructure and traffic against unauthorized access, disruption, and abuse.",
        url: "https://en.wikipedia.org/wiki/network_security_-_overview",
        fileType: 'WEB',
    },
    // COMPUTER NETWORKS
    {
        title: "Network Security - Concepts and Applications",
        content: "Network security protects communication infrastructure and traffic against unauthorized access, disruption, and abuse. Common technologies include firewalls, VPNs, intrusion detection, intrusion prevention, segmentation, encryption, and secure authentication. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Network security protects communication infrastructure and traffic against unauthorized access, disruption, and abuse.",
        url: "https://en.wikipedia.org/wiki/network_security_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Software Development Life Cycle - Overview",
        content: "The software development life cycle describes activities involved in building and maintaining software. Typical stages include requirements, design, implementation, testing, deployment, and maintenance. Different methodologies organize these activities differently. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The software development life cycle describes activities involved in building and maintaining software.",
        url: "https://en.wikipedia.org/wiki/software_development_life_cycle_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Software Development Life Cycle - Concepts and Applications",
        content: "The software development life cycle describes activities involved in building and maintaining software. Typical stages include requirements, design, implementation, testing, deployment, and maintenance. Different methodologies organize these activities differently. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The software development life cycle describes activities involved in building and maintaining software.",
        url: "https://en.wikipedia.org/wiki/software_development_life_cycle_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Agile Software Development - Overview",
        content: "Agile software development emphasizes iterative delivery, customer feedback, collaboration, and adaptation to changing requirements. Scrum and Kanban are common approaches. Agile teams generally deliver software in small increments rather than waiting for a single final release. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Agile software development emphasizes iterative delivery, customer feedback, collaboration, and adaptation to changing requirements.",
        url: "https://en.wikipedia.org/wiki/agile_software_development_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Agile Software Development - Concepts and Applications",
        content: "Agile software development emphasizes iterative delivery, customer feedback, collaboration, and adaptation to changing requirements. Scrum and Kanban are common approaches. Agile teams generally deliver software in small increments rather than waiting for a single final release. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Agile software development emphasizes iterative delivery, customer feedback, collaboration, and adaptation to changing requirements.",
        url: "https://en.wikipedia.org/wiki/agile_software_development_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Scrum Framework - Overview",
        content: "Scrum is an agile framework for developing complex products through iterative work periods called sprints. Common accountabilities include Product Owner, Scrum Master, and Developers. Events include sprint planning, daily scrum, sprint review, and retrospective. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Scrum is an agile framework for developing complex products through iterative work periods called sprints.",
        url: "https://en.wikipedia.org/wiki/scrum_framework_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Scrum Framework - Concepts and Applications",
        content: "Scrum is an agile framework for developing complex products through iterative work periods called sprints. Common accountabilities include Product Owner, Scrum Master, and Developers. Events include sprint planning, daily scrum, sprint review, and retrospective. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Scrum is an agile framework for developing complex products through iterative work periods called sprints.",
        url: "https://en.wikipedia.org/wiki/scrum_framework_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Unit Testing - Overview",
        content: "Unit testing verifies small pieces of software, usually functions, methods, or classes, in isolation from external dependencies. Good unit tests are repeatable, focused, and fast. Mocking and dependency injection can help isolate the unit under test. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Unit testing verifies small pieces of software, usually functions, methods, or classes, in isolation from external dependencies.",
        url: "https://en.wikipedia.org/wiki/unit_testing_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Unit Testing - Concepts and Applications",
        content: "Unit testing verifies small pieces of software, usually functions, methods, or classes, in isolation from external dependencies. Good unit tests are repeatable, focused, and fast. Mocking and dependency injection can help isolate the unit under test. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Unit testing verifies small pieces of software, usually functions, methods, or classes, in isolation from external dependencies.",
        url: "https://en.wikipedia.org/wiki/unit_testing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Integration Testing - Overview",
        content: "Integration testing checks whether multiple components work correctly together. It can expose problems in APIs, databases, message queues, authentication, and configuration that unit tests may not detect. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Integration testing checks whether multiple components work correctly together.",
        url: "https://en.wikipedia.org/wiki/integration_testing_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Integration Testing - Concepts and Applications",
        content: "Integration testing checks whether multiple components work correctly together. It can expose problems in APIs, databases, message queues, authentication, and configuration that unit tests may not detect. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Integration testing checks whether multiple components work correctly together.",
        url: "https://en.wikipedia.org/wiki/integration_testing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Continuous Integration - Overview",
        content: "Continuous integration is a development practice in which code changes are frequently integrated and automatically validated. CI pipelines commonly run formatting checks, static analysis, unit tests, integration tests, and builds. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Continuous integration is a development practice in which code changes are frequently integrated and automatically validated.",
        url: "https://en.wikipedia.org/wiki/continuous_integration_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Continuous Integration - Concepts and Applications",
        content: "Continuous integration is a development practice in which code changes are frequently integrated and automatically validated. CI pipelines commonly run formatting checks, static analysis, unit tests, integration tests, and builds. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Continuous integration is a development practice in which code changes are frequently integrated and automatically validated.",
        url: "https://en.wikipedia.org/wiki/continuous_integration_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Continuous Deployment - Overview",
        content: "Continuous deployment automatically releases validated software changes to production. It relies on automated testing, monitoring, rollback strategies, and reliable deployment infrastructure. Continuous delivery is closely related but may keep a manual approval step before production. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Continuous deployment automatically releases validated software changes to production.",
        url: "https://en.wikipedia.org/wiki/continuous_deployment_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Continuous Deployment - Concepts and Applications",
        content: "Continuous deployment automatically releases validated software changes to production. It relies on automated testing, monitoring, rollback strategies, and reliable deployment infrastructure. Continuous delivery is closely related but may keep a manual approval step before production. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Continuous deployment automatically releases validated software changes to production.",
        url: "https://en.wikipedia.org/wiki/continuous_deployment_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Software Design Patterns - Overview",
        content: "Design patterns are reusable approaches to recurring software design problems. Examples include Factory, Strategy, Observer, Adapter, Decorator, Singleton, and Repository patterns. Patterns should be applied when they simplify design rather than merely adding abstraction. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Design patterns are reusable approaches to recurring software design problems.",
        url: "https://en.wikipedia.org/wiki/software_design_patterns_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Software Design Patterns - Concepts and Applications",
        content: "Design patterns are reusable approaches to recurring software design problems. Examples include Factory, Strategy, Observer, Adapter, Decorator, Singleton, and Repository patterns. Patterns should be applied when they simplify design rather than merely adding abstraction. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Design patterns are reusable approaches to recurring software design problems.",
        url: "https://en.wikipedia.org/wiki/software_design_patterns_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Version Control - Overview",
        content: "Version control records changes to files over time and supports collaboration and recovery. Distributed systems such as Git allow developers to create branches, commits, merges, and tags locally while sharing repositories with remote platforms. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Version control records changes to files over time and supports collaboration and recovery.",
        url: "https://en.wikipedia.org/wiki/version_control_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Version Control - Concepts and Applications",
        content: "Version control records changes to files over time and supports collaboration and recovery. Distributed systems such as Git allow developers to create branches, commits, merges, and tags locally while sharing repositories with remote platforms. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Version control records changes to files over time and supports collaboration and recovery.",
        url: "https://en.wikipedia.org/wiki/version_control_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Code Review - Overview",
        content: "Code review is the practice of examining code changes before they are integrated. Reviews can identify defects, security issues, maintainability problems, unclear design, and missing tests. Effective reviews focus on correctness and constructive feedback. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Code review is the practice of examining code changes before they are integrated.",
        url: "https://en.wikipedia.org/wiki/code_review_-_overview",
        fileType: 'WEB',
    },
    // SOFTWARE ENGINEERING
    {
        title: "Code Review - Concepts and Applications",
        content: "Code review is the practice of examining code changes before they are integrated. Reviews can identify defects, security issues, maintainability problems, unclear design, and missing tests. Effective reviews focus on correctness and constructive feedback. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Code review is the practice of examining code changes before they are integrated.",
        url: "https://en.wikipedia.org/wiki/code_review_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Cryptography - Overview",
        content: "Cryptography uses mathematical techniques to protect information and communications. Major areas include encryption, hashing, digital signatures, key exchange, authentication, and certificates. Modern cryptographic systems depend on carefully analyzed algorithms and secure key management. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Cryptography uses mathematical techniques to protect information and communications.",
        url: "https://en.wikipedia.org/wiki/cryptography_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Cryptography - Concepts and Applications",
        content: "Cryptography uses mathematical techniques to protect information and communications. Major areas include encryption, hashing, digital signatures, key exchange, authentication, and certificates. Modern cryptographic systems depend on carefully analyzed algorithms and secure key management. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Cryptography uses mathematical techniques to protect information and communications.",
        url: "https://en.wikipedia.org/wiki/cryptography_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Hash Function - Overview",
        content: "A cryptographic hash function maps input data to a fixed-size digest with properties such as preimage resistance and collision resistance. Hashes are widely used for integrity checking, digital signatures, password storage schemes, and data structures. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A cryptographic hash function maps input data to a fixed-size digest with properties such as preimage resistance and collision resistance.",
        url: "https://en.wikipedia.org/wiki/hash_function_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Hash Function - Concepts and Applications",
        content: "A cryptographic hash function maps input data to a fixed-size digest with properties such as preimage resistance and collision resistance. Hashes are widely used for integrity checking, digital signatures, password storage schemes, and data structures. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A cryptographic hash function maps input data to a fixed-size digest with properties such as preimage resistance and collision resistance.",
        url: "https://en.wikipedia.org/wiki/hash_function_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Public Key Cryptography - Overview",
        content: "Public key cryptography uses a mathematically related public key and private key. The public key can be distributed openly while the private key must remain secret. Applications include encryption, digital signatures, authentication, and secure key exchange. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Public key cryptography uses a mathematically related public key and private key.",
        url: "https://en.wikipedia.org/wiki/public_key_cryptography_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Public Key Cryptography - Concepts and Applications",
        content: "Public key cryptography uses a mathematically related public key and private key. The public key can be distributed openly while the private key must remain secret. Applications include encryption, digital signatures, authentication, and secure key exchange. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Public key cryptography uses a mathematically related public key and private key.",
        url: "https://en.wikipedia.org/wiki/public_key_cryptography_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "SQL Injection - Overview",
        content: "SQL injection is a vulnerability in which attacker-controlled input changes the meaning of a database query. Parameterized queries and prepared statements are primary defenses. Input validation, least privilege, and secure application design provide additional protection. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "SQL injection is a vulnerability in which attacker-controlled input changes the meaning of a database query.",
        url: "https://en.wikipedia.org/wiki/sql_injection_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "SQL Injection - Concepts and Applications",
        content: "SQL injection is a vulnerability in which attacker-controlled input changes the meaning of a database query. Parameterized queries and prepared statements are primary defenses. Input validation, least privilege, and secure application design provide additional protection. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "SQL injection is a vulnerability in which attacker-controlled input changes the meaning of a database query.",
        url: "https://en.wikipedia.org/wiki/sql_injection_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Cross Site Scripting - Overview",
        content: "Cross-site scripting occurs when untrusted content is interpreted as executable script in a user's browser. Types include stored, reflected, and DOM-based XSS. Context-aware output encoding, content security policy, and safe templating help reduce risk. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Cross-site scripting occurs when untrusted content is interpreted as executable script in a user's browser.",
        url: "https://en.wikipedia.org/wiki/cross_site_scripting_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Cross Site Scripting - Concepts and Applications",
        content: "Cross-site scripting occurs when untrusted content is interpreted as executable script in a user's browser. Types include stored, reflected, and DOM-based XSS. Context-aware output encoding, content security policy, and safe templating help reduce risk. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Cross-site scripting occurs when untrusted content is interpreted as executable script in a user's browser.",
        url: "https://en.wikipedia.org/wiki/cross_site_scripting_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Phishing - Overview",
        content: "Phishing is a social engineering technique that attempts to trick users into revealing information or performing unsafe actions. Attacks may use deceptive emails, websites, messages, or phone calls. User education, multi-factor authentication, and technical filtering reduce risk. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Phishing is a social engineering technique that attempts to trick users into revealing information or performing unsafe actions.",
        url: "https://en.wikipedia.org/wiki/phishing_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Phishing - Concepts and Applications",
        content: "Phishing is a social engineering technique that attempts to trick users into revealing information or performing unsafe actions. Attacks may use deceptive emails, websites, messages, or phone calls. User education, multi-factor authentication, and technical filtering reduce risk. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Phishing is a social engineering technique that attempts to trick users into revealing information or performing unsafe actions.",
        url: "https://en.wikipedia.org/wiki/phishing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Firewall - Overview",
        content: "A firewall controls network traffic according to configured security rules. Firewalls may operate at different layers and can filter by addresses, ports, protocols, applications, or connection state. They are one component of a broader defense-in-depth strategy. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A firewall controls network traffic according to configured security rules.",
        url: "https://en.wikipedia.org/wiki/firewall_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Firewall - Concepts and Applications",
        content: "A firewall controls network traffic according to configured security rules. Firewalls may operate at different layers and can filter by addresses, ports, protocols, applications, or connection state. They are one component of a broader defense-in-depth strategy. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A firewall controls network traffic according to configured security rules.",
        url: "https://en.wikipedia.org/wiki/firewall_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Multi Factor Authentication - Overview",
        content: "Multi-factor authentication requires two or more independent categories of evidence to verify identity. Factors can include knowledge, possession, and inherence. MFA significantly reduces the impact of many stolen-password attacks. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Multi-factor authentication requires two or more independent categories of evidence to verify identity.",
        url: "https://en.wikipedia.org/wiki/multi_factor_authentication_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Multi Factor Authentication - Concepts and Applications",
        content: "Multi-factor authentication requires two or more independent categories of evidence to verify identity. Factors can include knowledge, possession, and inherence. MFA significantly reduces the impact of many stolen-password attacks. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Multi-factor authentication requires two or more independent categories of evidence to verify identity.",
        url: "https://en.wikipedia.org/wiki/multi_factor_authentication_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Zero Trust Security - Overview",
        content: "Zero trust is a security approach based on continuously verifying identities, devices, applications, and access requests rather than automatically trusting users because they are inside a network. Least privilege and segmentation are common principles. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Zero trust is a security approach based on continuously verifying identities, devices, applications, and access requests rather than automatically trusting users because they are inside a network.",
        url: "https://en.wikipedia.org/wiki/zero_trust_security_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Zero Trust Security - Concepts and Applications",
        content: "Zero trust is a security approach based on continuously verifying identities, devices, applications, and access requests rather than automatically trusting users because they are inside a network. Least privilege and segmentation are common principles. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Zero trust is a security approach based on continuously verifying identities, devices, applications, and access requests rather than automatically trusting users because they are inside a network.",
        url: "https://en.wikipedia.org/wiki/zero_trust_security_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Secure Software Development - Overview",
        content: "Secure software development incorporates security into requirements, design, coding, testing, deployment, and maintenance. Practices include threat modeling, dependency management, secret protection, secure defaults, automated scanning, and incident response planning. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Secure software development incorporates security into requirements, design, coding, testing, deployment, and maintenance.",
        url: "https://en.wikipedia.org/wiki/secure_software_development_-_overview",
        fileType: 'WEB',
    },
    // SECURITY
    {
        title: "Secure Software Development - Concepts and Applications",
        content: "Secure software development incorporates security into requirements, design, coding, testing, deployment, and maintenance. Practices include threat modeling, dependency management, secret protection, secure defaults, automated scanning, and incident response planning. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Secure software development incorporates security into requirements, design, coding, testing, deployment, and maintenance.",
        url: "https://en.wikipedia.org/wiki/secure_software_development_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Probability - Overview",
        content: "Probability is the mathematical study of uncertainty and random events. Fundamental concepts include sample spaces, events, conditional probability, independence, Bayes' theorem, random variables, and probability distributions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Probability is the mathematical study of uncertainty and random events.",
        url: "https://en.wikipedia.org/wiki/probability_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Probability - Concepts and Applications",
        content: "Probability is the mathematical study of uncertainty and random events. Fundamental concepts include sample spaces, events, conditional probability, independence, Bayes' theorem, random variables, and probability distributions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Probability is the mathematical study of uncertainty and random events.",
        url: "https://en.wikipedia.org/wiki/probability_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Statistics - Overview",
        content: "Statistics involves collecting, analyzing, interpreting, and presenting data. Descriptive statistics summarize observations while inferential statistics use samples to draw conclusions about populations. Common concepts include mean, median, variance, confidence intervals, and hypothesis tests. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Statistics involves collecting, analyzing, interpreting, and presenting data.",
        url: "https://en.wikipedia.org/wiki/statistics_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Statistics - Concepts and Applications",
        content: "Statistics involves collecting, analyzing, interpreting, and presenting data. Descriptive statistics summarize observations while inferential statistics use samples to draw conclusions about populations. Common concepts include mean, median, variance, confidence intervals, and hypothesis tests. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Statistics involves collecting, analyzing, interpreting, and presenting data.",
        url: "https://en.wikipedia.org/wiki/statistics_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Linear Algebra - Overview",
        content: "Linear algebra studies vectors, matrices, linear transformations, and systems of linear equations. It provides mathematical foundations for computer graphics, optimization, machine learning, signal processing, and scientific computing. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Linear algebra studies vectors, matrices, linear transformations, and systems of linear equations.",
        url: "https://en.wikipedia.org/wiki/linear_algebra_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Linear Algebra - Concepts and Applications",
        content: "Linear algebra studies vectors, matrices, linear transformations, and systems of linear equations. It provides mathematical foundations for computer graphics, optimization, machine learning, signal processing, and scientific computing. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Linear algebra studies vectors, matrices, linear transformations, and systems of linear equations.",
        url: "https://en.wikipedia.org/wiki/linear_algebra_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Calculus - Overview",
        content: "Calculus studies continuous change and accumulation. Differential calculus focuses on rates of change while integral calculus focuses on accumulation and area. Calculus is fundamental to physics, engineering, optimization, economics, and machine learning. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Calculus studies continuous change and accumulation.",
        url: "https://en.wikipedia.org/wiki/calculus_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Calculus - Concepts and Applications",
        content: "Calculus studies continuous change and accumulation. Differential calculus focuses on rates of change while integral calculus focuses on accumulation and area. Calculus is fundamental to physics, engineering, optimization, economics, and machine learning. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Calculus studies continuous change and accumulation.",
        url: "https://en.wikipedia.org/wiki/calculus_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Graph Theory - Overview",
        content: "Graph theory studies mathematical structures consisting of vertices and edges. Graphs can model networks, dependencies, roads, social relationships, and communication systems. Important algorithms include breadth-first search, depth-first search, shortest paths, and minimum spanning trees. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Graph theory studies mathematical structures consisting of vertices and edges.",
        url: "https://en.wikipedia.org/wiki/graph_theory_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Graph Theory - Concepts and Applications",
        content: "Graph theory studies mathematical structures consisting of vertices and edges. Graphs can model networks, dependencies, roads, social relationships, and communication systems. Important algorithms include breadth-first search, depth-first search, shortest paths, and minimum spanning trees. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Graph theory studies mathematical structures consisting of vertices and edges.",
        url: "https://en.wikipedia.org/wiki/graph_theory_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Set Theory - Overview",
        content: "Set theory studies collections of objects and relationships between them. Operations include union, intersection, difference, complement, and Cartesian product. Sets provide foundations for many areas of mathematics and computer science. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Set theory studies collections of objects and relationships between them.",
        url: "https://en.wikipedia.org/wiki/set_theory_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Set Theory - Concepts and Applications",
        content: "Set theory studies collections of objects and relationships between them. Operations include union, intersection, difference, complement, and Cartesian product. Sets provide foundations for many areas of mathematics and computer science. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Set theory studies collections of objects and relationships between them.",
        url: "https://en.wikipedia.org/wiki/set_theory_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Number Theory - Overview",
        content: "Number theory studies integers and their properties. Topics include prime numbers, divisibility, modular arithmetic, greatest common divisors, congruences, and Diophantine equations. Number theory is important in cryptography and algorithms. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Number theory studies integers and their properties.",
        url: "https://en.wikipedia.org/wiki/number_theory_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Number Theory - Concepts and Applications",
        content: "Number theory studies integers and their properties. Topics include prime numbers, divisibility, modular arithmetic, greatest common divisors, congruences, and Diophantine equations. Number theory is important in cryptography and algorithms. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Number theory studies integers and their properties.",
        url: "https://en.wikipedia.org/wiki/number_theory_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Combinatorics - Overview",
        content: "Combinatorics studies counting, arrangements, selections, and discrete structures. Permutations, combinations, recurrence relations, inclusion-exclusion, and generating functions are common techniques. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Combinatorics studies counting, arrangements, selections, and discrete structures.",
        url: "https://en.wikipedia.org/wiki/combinatorics_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Combinatorics - Concepts and Applications",
        content: "Combinatorics studies counting, arrangements, selections, and discrete structures. Permutations, combinations, recurrence relations, inclusion-exclusion, and generating functions are common techniques. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Combinatorics studies counting, arrangements, selections, and discrete structures.",
        url: "https://en.wikipedia.org/wiki/combinatorics_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Bayes Theorem - Overview",
        content: "Bayes' theorem describes how conditional probabilities can be updated using new evidence. It relates the probability of a hypothesis given evidence to the probability of the evidence given the hypothesis. Bayesian reasoning is used in statistics, diagnosis, classification, and decision making. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Bayes' theorem describes how conditional probabilities can be updated using new evidence.",
        url: "https://en.wikipedia.org/wiki/bayes_theorem_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Bayes Theorem - Concepts and Applications",
        content: "Bayes' theorem describes how conditional probabilities can be updated using new evidence. It relates the probability of a hypothesis given evidence to the probability of the evidence given the hypothesis. Bayesian reasoning is used in statistics, diagnosis, classification, and decision making. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Bayes' theorem describes how conditional probabilities can be updated using new evidence.",
        url: "https://en.wikipedia.org/wiki/bayes_theorem_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Regression Analysis - Overview",
        content: "Regression analysis models relationships between variables and can be used for prediction or inference. Linear regression estimates relationships using a linear model, while nonlinear and generalized models support broader situations. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Regression analysis models relationships between variables and can be used for prediction or inference.",
        url: "https://en.wikipedia.org/wiki/regression_analysis_-_overview",
        fileType: 'WEB',
    },
    // MATHEMATICS & STATISTICS
    {
        title: "Regression Analysis - Concepts and Applications",
        content: "Regression analysis models relationships between variables and can be used for prediction or inference. Linear regression estimates relationships using a linear model, while nonlinear and generalized models support broader situations. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Regression analysis models relationships between variables and can be used for prediction or inference.",
        url: "https://en.wikipedia.org/wiki/regression_analysis_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Chemistry - Overview",
        content: "Chemistry studies matter, its composition, structure, properties, and transformations. Major areas include organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry. Chemical principles support medicine, materials science, energy, and manufacturing. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Chemistry studies matter, its composition, structure, properties, and transformations.",
        url: "https://en.wikipedia.org/wiki/chemistry_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Chemistry - Concepts and Applications",
        content: "Chemistry studies matter, its composition, structure, properties, and transformations. Major areas include organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry. Chemical principles support medicine, materials science, energy, and manufacturing. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Chemistry studies matter, its composition, structure, properties, and transformations.",
        url: "https://en.wikipedia.org/wiki/chemistry_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Biology - Overview",
        content: "Biology is the scientific study of living organisms and life processes. Major areas include genetics, ecology, evolution, microbiology, cell biology, physiology, and molecular biology. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Biology is the scientific study of living organisms and life processes.",
        url: "https://en.wikipedia.org/wiki/biology_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Biology - Concepts and Applications",
        content: "Biology is the scientific study of living organisms and life processes. Major areas include genetics, ecology, evolution, microbiology, cell biology, physiology, and molecular biology. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Biology is the scientific study of living organisms and life processes.",
        url: "https://en.wikipedia.org/wiki/biology_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Astronomy - Overview",
        content: "Astronomy studies celestial objects and phenomena beyond Earth's atmosphere. It includes planets, stars, galaxies, black holes, cosmology, and the evolution of the universe. Modern astronomy combines observations with physics and computational methods. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Astronomy studies celestial objects and phenomena beyond Earth's atmosphere.",
        url: "https://en.wikipedia.org/wiki/astronomy_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Astronomy - Concepts and Applications",
        content: "Astronomy studies celestial objects and phenomena beyond Earth's atmosphere. It includes planets, stars, galaxies, black holes, cosmology, and the evolution of the universe. Modern astronomy combines observations with physics and computational methods. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Astronomy studies celestial objects and phenomena beyond Earth's atmosphere.",
        url: "https://en.wikipedia.org/wiki/astronomy_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Geology - Overview",
        content: "Geology studies Earth, its materials, structure, history, and processes. Topics include plate tectonics, minerals, rocks, earthquakes, volcanoes, erosion, and Earth's geological history. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Geology studies Earth, its materials, structure, history, and processes.",
        url: "https://en.wikipedia.org/wiki/geology_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Geology - Concepts and Applications",
        content: "Geology studies Earth, its materials, structure, history, and processes. Topics include plate tectonics, minerals, rocks, earthquakes, volcanoes, erosion, and Earth's geological history. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Geology studies Earth, its materials, structure, history, and processes.",
        url: "https://en.wikipedia.org/wiki/geology_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Ecology - Overview",
        content: "Ecology studies relationships between organisms and their environments. Concepts include populations, communities, ecosystems, food webs, nutrient cycles, biodiversity, and ecological succession. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Ecology studies relationships between organisms and their environments.",
        url: "https://en.wikipedia.org/wiki/ecology_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Ecology - Concepts and Applications",
        content: "Ecology studies relationships between organisms and their environments. Concepts include populations, communities, ecosystems, food webs, nutrient cycles, biodiversity, and ecological succession. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Ecology studies relationships between organisms and their environments.",
        url: "https://en.wikipedia.org/wiki/ecology_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Genetics - Overview",
        content: "Genetics studies heredity and variation in living organisms. Genes are segments of genetic material that influence biological traits through complex interactions. Modern genetics includes molecular genetics, genomics, population genetics, and genetic engineering. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Genetics studies heredity and variation in living organisms.",
        url: "https://en.wikipedia.org/wiki/genetics_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Genetics - Concepts and Applications",
        content: "Genetics studies heredity and variation in living organisms. Genes are segments of genetic material that influence biological traits through complex interactions. Modern genetics includes molecular genetics, genomics, population genetics, and genetic engineering. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Genetics studies heredity and variation in living organisms.",
        url: "https://en.wikipedia.org/wiki/genetics_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Microbiology - Overview",
        content: "Microbiology studies microorganisms such as bacteria, archaea, fungi, protozoa, and viruses. Microorganisms influence ecosystems, human health, food production, biotechnology, and nutrient cycles. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Microbiology studies microorganisms such as bacteria, archaea, fungi, protozoa, and viruses.",
        url: "https://en.wikipedia.org/wiki/microbiology_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Microbiology - Concepts and Applications",
        content: "Microbiology studies microorganisms such as bacteria, archaea, fungi, protozoa, and viruses. Microorganisms influence ecosystems, human health, food production, biotechnology, and nutrient cycles. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Microbiology studies microorganisms such as bacteria, archaea, fungi, protozoa, and viruses.",
        url: "https://en.wikipedia.org/wiki/microbiology_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Human Anatomy - Overview",
        content: "Human anatomy studies the structure of the human body. Major systems include skeletal, muscular, nervous, cardiovascular, respiratory, digestive, endocrine, urinary, and reproductive systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Human anatomy studies the structure of the human body.",
        url: "https://en.wikipedia.org/wiki/human_anatomy_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Human Anatomy - Concepts and Applications",
        content: "Human anatomy studies the structure of the human body. Major systems include skeletal, muscular, nervous, cardiovascular, respiratory, digestive, endocrine, urinary, and reproductive systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Human anatomy studies the structure of the human body.",
        url: "https://en.wikipedia.org/wiki/human_anatomy_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Physics of Motion - Overview",
        content: "Classical mechanics describes motion using quantities such as displacement, velocity, acceleration, mass, and force. Newton's laws connect forces with changes in motion and provide a foundation for engineering and physical science. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Classical mechanics describes motion using quantities such as displacement, velocity, acceleration, mass, and force.",
        url: "https://en.wikipedia.org/wiki/physics_of_motion_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Physics of Motion - Concepts and Applications",
        content: "Classical mechanics describes motion using quantities such as displacement, velocity, acceleration, mass, and force. Newton's laws connect forces with changes in motion and provide a foundation for engineering and physical science. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Classical mechanics describes motion using quantities such as displacement, velocity, acceleration, mass, and force.",
        url: "https://en.wikipedia.org/wiki/physics_of_motion_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Thermodynamics - Overview",
        content: "Thermodynamics studies energy, heat, work, temperature, and transformations between energy forms. The laws of thermodynamics describe conservation of energy, entropy, and limits on physical processes. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Thermodynamics studies energy, heat, work, temperature, and transformations between energy forms.",
        url: "https://en.wikipedia.org/wiki/thermodynamics_-_overview",
        fileType: 'WEB',
    },
    // SCIENCE
    {
        title: "Thermodynamics - Concepts and Applications",
        content: "Thermodynamics studies energy, heat, work, temperature, and transformations between energy forms. The laws of thermodynamics describe conservation of energy, entropy, and limits on physical processes. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Thermodynamics studies energy, heat, work, temperature, and transformations between energy forms.",
        url: "https://en.wikipedia.org/wiki/thermodynamics_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Ancient Egypt - Overview",
        content: "Ancient Egyptian civilization developed along the Nile River and lasted for thousands of years. It is known for monumental architecture, hieroglyphic writing, complex religious traditions, centralized government, mathematics, medicine, and extensive archaeological remains. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Ancient Egyptian civilization developed along the Nile River and lasted for thousands of years.",
        url: "https://en.wikipedia.org/wiki/ancient_egypt_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Ancient Egypt - Concepts and Applications",
        content: "Ancient Egyptian civilization developed along the Nile River and lasted for thousands of years. It is known for monumental architecture, hieroglyphic writing, complex religious traditions, centralized government, mathematics, medicine, and extensive archaeological remains. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Ancient Egyptian civilization developed along the Nile River and lasted for thousands of years.",
        url: "https://en.wikipedia.org/wiki/ancient_egypt_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Indus Valley Civilization - Overview",
        content: "The Indus Valley Civilization developed in parts of present-day South Asia during the Bronze Age. Major sites include Harappa and Mohenjo-daro. The civilization is known for planned cities, drainage systems, standardized weights, trade, and an undeciphered writing system. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Indus Valley Civilization developed in parts of present-day South Asia during the Bronze Age.",
        url: "https://en.wikipedia.org/wiki/indus_valley_civilization_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Indus Valley Civilization - Concepts and Applications",
        content: "The Indus Valley Civilization developed in parts of present-day South Asia during the Bronze Age. Major sites include Harappa and Mohenjo-daro. The civilization is known for planned cities, drainage systems, standardized weights, trade, and an undeciphered writing system. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Indus Valley Civilization developed in parts of present-day South Asia during the Bronze Age.",
        url: "https://en.wikipedia.org/wiki/indus_valley_civilization_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Maurya Empire - Overview",
        content: "The Maurya Empire was one of the largest political formations in ancient South Asia. Chandragupta Maurya established the empire, while Ashoka became famous for policies influenced by Buddhism and inscriptions distributed across the subcontinent. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Maurya Empire was one of the largest political formations in ancient South Asia.",
        url: "https://en.wikipedia.org/wiki/maurya_empire_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Maurya Empire - Concepts and Applications",
        content: "The Maurya Empire was one of the largest political formations in ancient South Asia. Chandragupta Maurya established the empire, while Ashoka became famous for policies influenced by Buddhism and inscriptions distributed across the subcontinent. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Maurya Empire was one of the largest political formations in ancient South Asia.",
        url: "https://en.wikipedia.org/wiki/maurya_empire_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Gupta Empire - Overview",
        content: "The Gupta period is often associated with major developments in mathematics, astronomy, literature, art, and science in South Asia. Important figures and works from the period influenced later Indian intellectual traditions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Gupta period is often associated with major developments in mathematics, astronomy, literature, art, and science in South Asia.",
        url: "https://en.wikipedia.org/wiki/gupta_empire_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Gupta Empire - Concepts and Applications",
        content: "The Gupta period is often associated with major developments in mathematics, astronomy, literature, art, and science in South Asia. Important figures and works from the period influenced later Indian intellectual traditions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Gupta period is often associated with major developments in mathematics, astronomy, literature, art, and science in South Asia.",
        url: "https://en.wikipedia.org/wiki/gupta_empire_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Mughal Empire - Overview",
        content: "The Mughal Empire was a major early modern empire in South Asia founded by Babur in 1526. Mughal rulers contributed to architecture, administration, art, literature, and cultural exchange. The empire reached significant territorial extent under rulers including Akbar, Shah Jahan, and Aurangzeb. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Mughal Empire was a major early modern empire in South Asia founded by Babur in 1526.",
        url: "https://en.wikipedia.org/wiki/mughal_empire_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Mughal Empire - Concepts and Applications",
        content: "The Mughal Empire was a major early modern empire in South Asia founded by Babur in 1526. Mughal rulers contributed to architecture, administration, art, literature, and cultural exchange. The empire reached significant territorial extent under rulers including Akbar, Shah Jahan, and Aurangzeb. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Mughal Empire was a major early modern empire in South Asia founded by Babur in 1526.",
        url: "https://en.wikipedia.org/wiki/mughal_empire_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "British Raj - Overview",
        content: "The British Raj refers to the period of direct British Crown rule over much of the Indian subcontinent from 1858 to 1947. It shaped administration, infrastructure, education, economy, and political movements while also being associated with colonial exploitation and resistance. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The British Raj refers to the period of direct British Crown rule over much of the Indian subcontinent from 1858 to 1947.",
        url: "https://en.wikipedia.org/wiki/british_raj_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "British Raj - Concepts and Applications",
        content: "The British Raj refers to the period of direct British Crown rule over much of the Indian subcontinent from 1858 to 1947. It shaped administration, infrastructure, education, economy, and political movements while also being associated with colonial exploitation and resistance. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The British Raj refers to the period of direct British Crown rule over much of the Indian subcontinent from 1858 to 1947.",
        url: "https://en.wikipedia.org/wiki/british_raj_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Indian Independence Movement - Overview",
        content: "The Indian independence movement was a long political and social struggle against British colonial rule. It included constitutional efforts, mass movements, revolutionary activities, labor and peasant mobilization, and campaigns led by organizations such as the Indian National Congress. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Indian independence movement was a long political and social struggle against British colonial rule.",
        url: "https://en.wikipedia.org/wiki/indian_independence_movement_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Indian Independence Movement - Concepts and Applications",
        content: "The Indian independence movement was a long political and social struggle against British colonial rule. It included constitutional efforts, mass movements, revolutionary activities, labor and peasant mobilization, and campaigns led by organizations such as the Indian National Congress. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Indian independence movement was a long political and social struggle against British colonial rule.",
        url: "https://en.wikipedia.org/wiki/indian_independence_movement_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "French Revolution - Overview",
        content: "The French Revolution began in 1789 and transformed France's political and social order. Major events included the Estates-General, fall of the Bastille, declaration of rights, abolition of monarchy, Reign of Terror, and rise of Napoleon. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The French Revolution began in 1789 and transformed France's political and social order.",
        url: "https://en.wikipedia.org/wiki/french_revolution_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "French Revolution - Concepts and Applications",
        content: "The French Revolution began in 1789 and transformed France's political and social order. Major events included the Estates-General, fall of the Bastille, declaration of rights, abolition of monarchy, Reign of Terror, and rise of Napoleon. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The French Revolution began in 1789 and transformed France's political and social order.",
        url: "https://en.wikipedia.org/wiki/french_revolution_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Renaissance - Overview",
        content: "The Renaissance was a period of cultural and intellectual transformation that began in Italian cities and spread across Europe. It featured renewed interest in classical learning, humanism, art, science, literature, and new approaches to observation. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Renaissance was a period of cultural and intellectual transformation that began in Italian cities and spread across Europe.",
        url: "https://en.wikipedia.org/wiki/renaissance_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Renaissance - Concepts and Applications",
        content: "The Renaissance was a period of cultural and intellectual transformation that began in Italian cities and spread across Europe. It featured renewed interest in classical learning, humanism, art, science, literature, and new approaches to observation. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Renaissance was a period of cultural and intellectual transformation that began in Italian cities and spread across Europe.",
        url: "https://en.wikipedia.org/wiki/renaissance_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Cold War - Overview",
        content: "The Cold War was a prolonged geopolitical rivalry between the United States and Soviet Union and their respective allies after World War II. It involved political competition, military alliances, nuclear deterrence, proxy conflicts, technological competition, and the space race. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Cold War was a prolonged geopolitical rivalry between the United States and Soviet Union and their respective allies after World War II.",
        url: "https://en.wikipedia.org/wiki/cold_war_-_overview",
        fileType: 'WEB',
    },
    // HISTORY & CIVILIZATION
    {
        title: "Cold War - Concepts and Applications",
        content: "The Cold War was a prolonged geopolitical rivalry between the United States and Soviet Union and their respective allies after World War II. It involved political competition, military alliances, nuclear deterrence, proxy conflicts, technological competition, and the space race. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Cold War was a prolonged geopolitical rivalry between the United States and Soviet Union and their respective allies after World War II.",
        url: "https://en.wikipedia.org/wiki/cold_war_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Earth - Overview",
        content: "Earth is the third planet from the Sun and the only astronomical object currently known to support life. It has a layered interior, an atmosphere, liquid surface water, a magnetic field, and a diverse biosphere. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Earth is the third planet from the Sun and the only astronomical object currently known to support life.",
        url: "https://en.wikipedia.org/wiki/earth_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Earth - Concepts and Applications",
        content: "Earth is the third planet from the Sun and the only astronomical object currently known to support life. It has a layered interior, an atmosphere, liquid surface water, a magnetic field, and a diverse biosphere. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Earth is the third planet from the Sun and the only astronomical object currently known to support life.",
        url: "https://en.wikipedia.org/wiki/earth_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Continents - Overview",
        content: "The commonly taught seven-continent model includes Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Continents are large landmasses whose boundaries may be defined differently in geographic traditions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The commonly taught seven-continent model includes Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        url: "https://en.wikipedia.org/wiki/continents_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Continents - Concepts and Applications",
        content: "The commonly taught seven-continent model includes Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Continents are large landmasses whose boundaries may be defined differently in geographic traditions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The commonly taught seven-continent model includes Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        url: "https://en.wikipedia.org/wiki/continents_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Indian Ocean - Overview",
        content: "The Indian Ocean is the third-largest ocean and lies between Africa, Asia, Australia, and the Southern Ocean. It is important for climate, monsoon systems, biodiversity, shipping, fisheries, and international trade. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Indian Ocean is the third-largest ocean and lies between Africa, Asia, Australia, and the Southern Ocean.",
        url: "https://en.wikipedia.org/wiki/indian_ocean_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Indian Ocean - Concepts and Applications",
        content: "The Indian Ocean is the third-largest ocean and lies between Africa, Asia, Australia, and the Southern Ocean. It is important for climate, monsoon systems, biodiversity, shipping, fisheries, and international trade. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Indian Ocean is the third-largest ocean and lies between Africa, Asia, Australia, and the Southern Ocean.",
        url: "https://en.wikipedia.org/wiki/indian_ocean_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Himalayas - Overview",
        content: "The Himalayas are a major mountain system in Asia formed by the collision of the Indian and Eurasian tectonic plates. They contain some of the world's highest peaks and strongly influence climate and river systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Himalayas are a major mountain system in Asia formed by the collision of the Indian and Eurasian tectonic plates.",
        url: "https://en.wikipedia.org/wiki/himalayas_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Himalayas - Concepts and Applications",
        content: "The Himalayas are a major mountain system in Asia formed by the collision of the Indian and Eurasian tectonic plates. They contain some of the world's highest peaks and strongly influence climate and river systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Himalayas are a major mountain system in Asia formed by the collision of the Indian and Eurasian tectonic plates.",
        url: "https://en.wikipedia.org/wiki/himalayas_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Amazon Rainforest - Overview",
        content: "The Amazon rainforest is a vast tropical forest primarily in South America. It supports exceptional biodiversity and plays important roles in regional climate, water cycling, carbon storage, and indigenous livelihoods. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Amazon rainforest is a vast tropical forest primarily in South America.",
        url: "https://en.wikipedia.org/wiki/amazon_rainforest_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Amazon Rainforest - Concepts and Applications",
        content: "The Amazon rainforest is a vast tropical forest primarily in South America. It supports exceptional biodiversity and plays important roles in regional climate, water cycling, carbon storage, and indigenous livelihoods. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Amazon rainforest is a vast tropical forest primarily in South America.",
        url: "https://en.wikipedia.org/wiki/amazon_rainforest_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Sahara Desert - Overview",
        content: "The Sahara is the largest hot desert and covers a large part of North Africa. Its environment includes dunes, rocky plateaus, mountains, gravel plains, and oases, with life adapted to limited water. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Sahara is the largest hot desert and covers a large part of North Africa.",
        url: "https://en.wikipedia.org/wiki/sahara_desert_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Sahara Desert - Concepts and Applications",
        content: "The Sahara is the largest hot desert and covers a large part of North Africa. Its environment includes dunes, rocky plateaus, mountains, gravel plains, and oases, with life adapted to limited water. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Sahara is the largest hot desert and covers a large part of North Africa.",
        url: "https://en.wikipedia.org/wiki/sahara_desert_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Ganges River - Overview",
        content: "The Ganges is a major river system of South Asia with deep geographic, cultural, agricultural, and economic importance. Its basin supports a very large population and contains extensive agricultural regions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Ganges is a major river system of South Asia with deep geographic, cultural, agricultural, and economic importance.",
        url: "https://en.wikipedia.org/wiki/ganges_river_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Ganges River - Concepts and Applications",
        content: "The Ganges is a major river system of South Asia with deep geographic, cultural, agricultural, and economic importance. Its basin supports a very large population and contains extensive agricultural regions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Ganges is a major river system of South Asia with deep geographic, cultural, agricultural, and economic importance.",
        url: "https://en.wikipedia.org/wiki/ganges_river_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Climate Zones - Overview",
        content: "Climate zones classify regions based on long-term patterns of temperature and precipitation. Major broad categories include tropical, dry, temperate, continental, and polar climates, with more detailed classification systems providing finer distinctions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Climate zones classify regions based on long-term patterns of temperature and precipitation.",
        url: "https://en.wikipedia.org/wiki/climate_zones_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Climate Zones - Concepts and Applications",
        content: "Climate zones classify regions based on long-term patterns of temperature and precipitation. Major broad categories include tropical, dry, temperate, continental, and polar climates, with more detailed classification systems providing finer distinctions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Climate zones classify regions based on long-term patterns of temperature and precipitation.",
        url: "https://en.wikipedia.org/wiki/climate_zones_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Map Projections - Overview",
        content: "A map projection transforms Earth's curved surface into a flat representation. Every projection introduces some form of distortion in area, shape, distance, or direction. Different projections are selected according to their intended use. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A map projection transforms Earth's curved surface into a flat representation.",
        url: "https://en.wikipedia.org/wiki/map_projections_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Map Projections - Concepts and Applications",
        content: "A map projection transforms Earth's curved surface into a flat representation. Every projection introduces some form of distortion in area, shape, distance, or direction. Different projections are selected according to their intended use. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A map projection transforms Earth's curved surface into a flat representation.",
        url: "https://en.wikipedia.org/wiki/map_projections_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Plate Tectonics - Overview",
        content: "Plate tectonics describes the movement of large sections of Earth's lithosphere over the underlying mantle. Plate interactions create mountains, earthquakes, volcanoes, ocean basins, and many major geological features. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Plate tectonics describes the movement of large sections of Earth's lithosphere over the underlying mantle.",
        url: "https://en.wikipedia.org/wiki/plate_tectonics_-_overview",
        fileType: 'WEB',
    },
    // GEOGRAPHY
    {
        title: "Plate Tectonics - Concepts and Applications",
        content: "Plate tectonics describes the movement of large sections of Earth's lithosphere over the underlying mantle. Plate interactions create mountains, earthquakes, volcanoes, ocean basins, and many major geological features. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Plate tectonics describes the movement of large sections of Earth's lithosphere over the underlying mantle.",
        url: "https://en.wikipedia.org/wiki/plate_tectonics_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Economics - Overview",
        content: "Economics studies how people and organizations allocate scarce resources to satisfy competing needs and wants. Microeconomics examines individual markets and decisions while macroeconomics studies economies as a whole. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Economics studies how people and organizations allocate scarce resources to satisfy competing needs and wants.",
        url: "https://en.wikipedia.org/wiki/economics_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Economics - Concepts and Applications",
        content: "Economics studies how people and organizations allocate scarce resources to satisfy competing needs and wants. Microeconomics examines individual markets and decisions while macroeconomics studies economies as a whole. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Economics studies how people and organizations allocate scarce resources to satisfy competing needs and wants.",
        url: "https://en.wikipedia.org/wiki/economics_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Supply and Demand - Overview",
        content: "Supply and demand describe how sellers and buyers interact in markets. The equilibrium price and quantity depend on the relationship between the amount producers offer and the amount consumers want to purchase. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Supply and demand describe how sellers and buyers interact in markets.",
        url: "https://en.wikipedia.org/wiki/supply_and_demand_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Supply and Demand - Concepts and Applications",
        content: "Supply and demand describe how sellers and buyers interact in markets. The equilibrium price and quantity depend on the relationship between the amount producers offer and the amount consumers want to purchase. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Supply and demand describe how sellers and buyers interact in markets.",
        url: "https://en.wikipedia.org/wiki/supply_and_demand_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Inflation - Overview",
        content: "Inflation is a sustained increase in the general price level of goods and services over time. It reduces the purchasing power of money when incomes do not rise proportionally. Central banks use monetary policy among other tools to influence inflation. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Inflation is a sustained increase in the general price level of goods and services over time.",
        url: "https://en.wikipedia.org/wiki/inflation_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Inflation - Concepts and Applications",
        content: "Inflation is a sustained increase in the general price level of goods and services over time. It reduces the purchasing power of money when incomes do not rise proportionally. Central banks use monetary policy among other tools to influence inflation. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Inflation is a sustained increase in the general price level of goods and services over time.",
        url: "https://en.wikipedia.org/wiki/inflation_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Gross Domestic Product - Overview",
        content: "Gross domestic product measures the monetary value of final goods and services produced within an economy during a specified period. GDP can be measured using expenditure, income, or production approaches. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Gross domestic product measures the monetary value of final goods and services produced within an economy during a specified period.",
        url: "https://en.wikipedia.org/wiki/gross_domestic_product_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Gross Domestic Product - Concepts and Applications",
        content: "Gross domestic product measures the monetary value of final goods and services produced within an economy during a specified period. GDP can be measured using expenditure, income, or production approaches. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Gross domestic product measures the monetary value of final goods and services produced within an economy during a specified period.",
        url: "https://en.wikipedia.org/wiki/gross_domestic_product_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Central Bank - Overview",
        content: "A central bank manages monetary policy and performs functions related to currency, financial stability, and banking systems. Examples include the Reserve Bank of India, Federal Reserve, European Central Bank, and Bank of England. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A central bank manages monetary policy and performs functions related to currency, financial stability, and banking systems.",
        url: "https://en.wikipedia.org/wiki/central_bank_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Central Bank - Concepts and Applications",
        content: "A central bank manages monetary policy and performs functions related to currency, financial stability, and banking systems. Examples include the Reserve Bank of India, Federal Reserve, European Central Bank, and Bank of England. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A central bank manages monetary policy and performs functions related to currency, financial stability, and banking systems.",
        url: "https://en.wikipedia.org/wiki/central_bank_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Interest Rate - Overview",
        content: "An interest rate represents the cost of borrowing money or the return earned on lending and saving. Interest rates influence consumption, investment, housing, exchange rates, and financial asset prices. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An interest rate represents the cost of borrowing money or the return earned on lending and saving.",
        url: "https://en.wikipedia.org/wiki/interest_rate_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Interest Rate - Concepts and Applications",
        content: "An interest rate represents the cost of borrowing money or the return earned on lending and saving. Interest rates influence consumption, investment, housing, exchange rates, and financial asset prices. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An interest rate represents the cost of borrowing money or the return earned on lending and saving.",
        url: "https://en.wikipedia.org/wiki/interest_rate_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Market Capitalization - Overview",
        content: "Market capitalization is the market value of a publicly traded company's outstanding shares. It is calculated by multiplying the share price by the number of outstanding shares. Investors often use market capitalization to classify companies by size. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Market capitalization is the market value of a publicly traded company's outstanding shares.",
        url: "https://en.wikipedia.org/wiki/market_capitalization_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Market Capitalization - Concepts and Applications",
        content: "Market capitalization is the market value of a publicly traded company's outstanding shares. It is calculated by multiplying the share price by the number of outstanding shares. Investors often use market capitalization to classify companies by size. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Market capitalization is the market value of a publicly traded company's outstanding shares.",
        url: "https://en.wikipedia.org/wiki/market_capitalization_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Mutual Fund - Overview",
        content: "A mutual fund pools money from multiple investors and invests it according to a defined strategy. Funds may invest in stocks, bonds, money-market instruments, or combinations of assets. Investors receive units representing their share of the portfolio. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A mutual fund pools money from multiple investors and invests it according to a defined strategy.",
        url: "https://en.wikipedia.org/wiki/mutual_fund_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Mutual Fund - Concepts and Applications",
        content: "A mutual fund pools money from multiple investors and invests it according to a defined strategy. Funds may invest in stocks, bonds, money-market instruments, or combinations of assets. Investors receive units representing their share of the portfolio. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A mutual fund pools money from multiple investors and invests it according to a defined strategy.",
        url: "https://en.wikipedia.org/wiki/mutual_fund_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Exchange Traded Fund - Overview",
        content: "An exchange-traded fund is an investment fund whose shares trade on a stock exchange. ETFs can track indexes, sectors, commodities, bonds, or other strategies. They combine pooled investment characteristics with exchange trading. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An exchange-traded fund is an investment fund whose shares trade on a stock exchange.",
        url: "https://en.wikipedia.org/wiki/exchange_traded_fund_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Exchange Traded Fund - Concepts and Applications",
        content: "An exchange-traded fund is an investment fund whose shares trade on a stock exchange. ETFs can track indexes, sectors, commodities, bonds, or other strategies. They combine pooled investment characteristics with exchange trading. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An exchange-traded fund is an investment fund whose shares trade on a stock exchange.",
        url: "https://en.wikipedia.org/wiki/exchange_traded_fund_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Supply Chain Management - Overview",
        content: "Supply chain management coordinates the flow of materials, information, and finances from suppliers through production and distribution to customers. Important areas include procurement, inventory, logistics, forecasting, and supplier management. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Supply chain management coordinates the flow of materials, information, and finances from suppliers through production and distribution to customers.",
        url: "https://en.wikipedia.org/wiki/supply_chain_management_-_overview",
        fileType: 'WEB',
    },
    // BUSINESS & ECONOMICS
    {
        title: "Supply Chain Management - Concepts and Applications",
        content: "Supply chain management coordinates the flow of materials, information, and finances from suppliers through production and distribution to customers. Important areas include procurement, inventory, logistics, forecasting, and supplier management. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Supply chain management coordinates the flow of materials, information, and finances from suppliers through production and distribution to customers.",
        url: "https://en.wikipedia.org/wiki/supply_chain_management_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Solar Energy - Overview",
        content: "Solar energy uses radiation from the Sun to produce electricity or heat. Photovoltaic cells convert sunlight directly into electricity while solar thermal systems capture heat. Solar power is renewable but depends on sunlight availability and requires suitable infrastructure. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Solar energy uses radiation from the Sun to produce electricity or heat.",
        url: "https://en.wikipedia.org/wiki/solar_energy_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Solar Energy - Concepts and Applications",
        content: "Solar energy uses radiation from the Sun to produce electricity or heat. Photovoltaic cells convert sunlight directly into electricity while solar thermal systems capture heat. Solar power is renewable but depends on sunlight availability and requires suitable infrastructure. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Solar energy uses radiation from the Sun to produce electricity or heat.",
        url: "https://en.wikipedia.org/wiki/solar_energy_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Wind Energy - Overview",
        content: "Wind energy converts the kinetic energy of moving air into electricity using turbines. Wind farms can be located on land or offshore. Performance depends on wind resources, turbine design, grid connection, and environmental considerations. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Wind energy converts the kinetic energy of moving air into electricity using turbines.",
        url: "https://en.wikipedia.org/wiki/wind_energy_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Wind Energy - Concepts and Applications",
        content: "Wind energy converts the kinetic energy of moving air into electricity using turbines. Wind farms can be located on land or offshore. Performance depends on wind resources, turbine design, grid connection, and environmental considerations. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Wind energy converts the kinetic energy of moving air into electricity using turbines.",
        url: "https://en.wikipedia.org/wiki/wind_energy_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Hydroelectric Power - Overview",
        content: "Hydroelectric power generates electricity from moving or falling water. Dams and run-of-river systems can provide renewable electricity and, in some cases, energy storage. Environmental effects can include changes to rivers, ecosystems, and communities. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Hydroelectric power generates electricity from moving or falling water.",
        url: "https://en.wikipedia.org/wiki/hydroelectric_power_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Hydroelectric Power - Concepts and Applications",
        content: "Hydroelectric power generates electricity from moving or falling water. Dams and run-of-river systems can provide renewable electricity and, in some cases, energy storage. Environmental effects can include changes to rivers, ecosystems, and communities. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Hydroelectric power generates electricity from moving or falling water.",
        url: "https://en.wikipedia.org/wiki/hydroelectric_power_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Nuclear Energy - Overview",
        content: "Nuclear power generates energy through nuclear reactions, commonly fission of heavy atomic nuclei. Nuclear plants can produce large amounts of electricity with low operational carbon emissions, while requiring strong safety, waste management, and regulatory systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Nuclear power generates energy through nuclear reactions, commonly fission of heavy atomic nuclei.",
        url: "https://en.wikipedia.org/wiki/nuclear_energy_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Nuclear Energy - Concepts and Applications",
        content: "Nuclear power generates energy through nuclear reactions, commonly fission of heavy atomic nuclei. Nuclear plants can produce large amounts of electricity with low operational carbon emissions, while requiring strong safety, waste management, and regulatory systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Nuclear power generates energy through nuclear reactions, commonly fission of heavy atomic nuclei.",
        url: "https://en.wikipedia.org/wiki/nuclear_energy_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Biodiversity - Overview",
        content: "Biodiversity describes the variety of life at genetic, species, and ecosystem levels. Biodiversity supports ecosystem functions and human well-being but can be affected by habitat loss, pollution, invasive species, overexploitation, and climate change. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Biodiversity describes the variety of life at genetic, species, and ecosystem levels.",
        url: "https://en.wikipedia.org/wiki/biodiversity_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Biodiversity - Concepts and Applications",
        content: "Biodiversity describes the variety of life at genetic, species, and ecosystem levels. Biodiversity supports ecosystem functions and human well-being but can be affected by habitat loss, pollution, invasive species, overexploitation, and climate change. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Biodiversity describes the variety of life at genetic, species, and ecosystem levels.",
        url: "https://en.wikipedia.org/wiki/biodiversity_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Recycling - Overview",
        content: "Recycling processes used materials so that components can be recovered and used again. Common recyclable materials include paper, glass, metals, and selected plastics. Recycling can reduce demand for raw materials but depends on collection, sorting, processing, and market conditions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Recycling processes used materials so that components can be recovered and used again.",
        url: "https://en.wikipedia.org/wiki/recycling_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Recycling - Concepts and Applications",
        content: "Recycling processes used materials so that components can be recovered and used again. Common recyclable materials include paper, glass, metals, and selected plastics. Recycling can reduce demand for raw materials but depends on collection, sorting, processing, and market conditions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Recycling processes used materials so that components can be recovered and used again.",
        url: "https://en.wikipedia.org/wiki/recycling_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Air Pollution - Overview",
        content: "Air pollution occurs when harmful substances enter the atmosphere at concentrations that can damage health, ecosystems, or materials. Major pollutants include particulate matter, nitrogen oxides, sulfur dioxide, ozone, and carbon monoxide. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Air pollution occurs when harmful substances enter the atmosphere at concentrations that can damage health, ecosystems, or materials.",
        url: "https://en.wikipedia.org/wiki/air_pollution_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Air Pollution - Concepts and Applications",
        content: "Air pollution occurs when harmful substances enter the atmosphere at concentrations that can damage health, ecosystems, or materials. Major pollutants include particulate matter, nitrogen oxides, sulfur dioxide, ozone, and carbon monoxide. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Air pollution occurs when harmful substances enter the atmosphere at concentrations that can damage health, ecosystems, or materials.",
        url: "https://en.wikipedia.org/wiki/air_pollution_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Water Pollution - Overview",
        content: "Water pollution occurs when contaminants degrade rivers, lakes, groundwater, oceans, or other water bodies. Sources include industrial discharge, agricultural runoff, sewage, plastics, and chemical contamination. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Water pollution occurs when contaminants degrade rivers, lakes, groundwater, oceans, or other water bodies.",
        url: "https://en.wikipedia.org/wiki/water_pollution_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Water Pollution - Concepts and Applications",
        content: "Water pollution occurs when contaminants degrade rivers, lakes, groundwater, oceans, or other water bodies. Sources include industrial discharge, agricultural runoff, sewage, plastics, and chemical contamination. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Water pollution occurs when contaminants degrade rivers, lakes, groundwater, oceans, or other water bodies.",
        url: "https://en.wikipedia.org/wiki/water_pollution_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Waste Management - Overview",
        content: "Waste management includes collection, transportation, treatment, recycling, recovery, and disposal of waste. Modern approaches emphasize waste prevention, reuse, material recovery, composting, and safe disposal. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Waste management includes collection, transportation, treatment, recycling, recovery, and disposal of waste.",
        url: "https://en.wikipedia.org/wiki/waste_management_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Waste Management - Concepts and Applications",
        content: "Waste management includes collection, transportation, treatment, recycling, recovery, and disposal of waste. Modern approaches emphasize waste prevention, reuse, material recovery, composting, and safe disposal. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Waste management includes collection, transportation, treatment, recycling, recovery, and disposal of waste.",
        url: "https://en.wikipedia.org/wiki/waste_management_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Sustainable Development - Overview",
        content: "Sustainable development seeks to meet present needs while preserving the ability of future generations to meet their needs. It integrates environmental protection, economic development, and social well-being. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Sustainable development seeks to meet present needs while preserving the ability of future generations to meet their needs.",
        url: "https://en.wikipedia.org/wiki/sustainable_development_-_overview",
        fileType: 'WEB',
    },
    // ENERGY & ENVIRONMENT
    {
        title: "Sustainable Development - Concepts and Applications",
        content: "Sustainable development seeks to meet present needs while preserving the ability of future generations to meet their needs. It integrates environmental protection, economic development, and social well-being. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Sustainable development seeks to meet present needs while preserving the ability of future generations to meet their needs.",
        url: "https://en.wikipedia.org/wiki/sustainable_development_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Literature - Overview",
        content: "Literature includes written and oral works that use language to communicate ideas, experiences, narratives, and artistic expression. Major forms include poetry, drama, fiction, nonfiction, essays, and epics. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Literature includes written and oral works that use language to communicate ideas, experiences, narratives, and artistic expression.",
        url: "https://en.wikipedia.org/wiki/literature_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Literature - Concepts and Applications",
        content: "Literature includes written and oral works that use language to communicate ideas, experiences, narratives, and artistic expression. Major forms include poetry, drama, fiction, nonfiction, essays, and epics. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Literature includes written and oral works that use language to communicate ideas, experiences, narratives, and artistic expression.",
        url: "https://en.wikipedia.org/wiki/literature_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Poetry - Overview",
        content: "Poetry is a literary form that uses concentrated language, rhythm, imagery, sound, and structure to express ideas or emotions. Forms vary widely across cultures and periods. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Poetry is a literary form that uses concentrated language, rhythm, imagery, sound, and structure to express ideas or emotions.",
        url: "https://en.wikipedia.org/wiki/poetry_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Poetry - Concepts and Applications",
        content: "Poetry is a literary form that uses concentrated language, rhythm, imagery, sound, and structure to express ideas or emotions. Forms vary widely across cultures and periods. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Poetry is a literary form that uses concentrated language, rhythm, imagery, sound, and structure to express ideas or emotions.",
        url: "https://en.wikipedia.org/wiki/poetry_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Painting - Overview",
        content: "Painting is a visual art practice in which pigments or other materials are applied to a surface. Styles include realism, impressionism, expressionism, cubism, surrealism, abstract art, and many regional traditions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Painting is a visual art practice in which pigments or other materials are applied to a surface.",
        url: "https://en.wikipedia.org/wiki/painting_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Painting - Concepts and Applications",
        content: "Painting is a visual art practice in which pigments or other materials are applied to a surface. Styles include realism, impressionism, expressionism, cubism, surrealism, abstract art, and many regional traditions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Painting is a visual art practice in which pigments or other materials are applied to a surface.",
        url: "https://en.wikipedia.org/wiki/painting_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Photography - Overview",
        content: "Photography creates images by recording light using cameras or other imaging systems. Digital photography uses electronic sensors while traditional photography uses light-sensitive materials such as film. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Photography creates images by recording light using cameras or other imaging systems.",
        url: "https://en.wikipedia.org/wiki/photography_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Photography - Concepts and Applications",
        content: "Photography creates images by recording light using cameras or other imaging systems. Digital photography uses electronic sensors while traditional photography uses light-sensitive materials such as film. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Photography creates images by recording light using cameras or other imaging systems.",
        url: "https://en.wikipedia.org/wiki/photography_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Theatre - Overview",
        content: "Theatre is a performing art in which actors present stories or ideas before an audience. It combines performance, dialogue, movement, set design, lighting, sound, costume, and direction. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Theatre is a performing art in which actors present stories or ideas before an audience.",
        url: "https://en.wikipedia.org/wiki/theatre_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Theatre - Concepts and Applications",
        content: "Theatre is a performing art in which actors present stories or ideas before an audience. It combines performance, dialogue, movement, set design, lighting, sound, costume, and direction. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Theatre is a performing art in which actors present stories or ideas before an audience.",
        url: "https://en.wikipedia.org/wiki/theatre_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Documentary Film - Overview",
        content: "A documentary is a nonfiction audiovisual work that presents real people, events, places, or issues. Documentary filmmakers use interviews, observation, archival material, narration, and visual storytelling. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A documentary is a nonfiction audiovisual work that presents real people, events, places, or issues.",
        url: "https://en.wikipedia.org/wiki/documentary_film_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Documentary Film - Concepts and Applications",
        content: "A documentary is a nonfiction audiovisual work that presents real people, events, places, or issues. Documentary filmmakers use interviews, observation, archival material, narration, and visual storytelling. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A documentary is a nonfiction audiovisual work that presents real people, events, places, or issues.",
        url: "https://en.wikipedia.org/wiki/documentary_film_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Animation - Overview",
        content: "Animation creates the appearance of movement by presenting sequential images or frames. Techniques include traditional hand-drawn animation, stop motion, 2D digital animation, and 3D computer animation. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Animation creates the appearance of movement by presenting sequential images or frames.",
        url: "https://en.wikipedia.org/wiki/animation_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Animation - Concepts and Applications",
        content: "Animation creates the appearance of movement by presenting sequential images or frames. Techniques include traditional hand-drawn animation, stop motion, 2D digital animation, and 3D computer animation. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Animation creates the appearance of movement by presenting sequential images or frames.",
        url: "https://en.wikipedia.org/wiki/animation_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "World Music - Overview",
        content: "World music is a broad term often used for musical traditions outside dominant commercial Western categories. It can encompass diverse regional instruments, rhythms, languages, performance practices, and cultural contexts. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "World music is a broad term often used for musical traditions outside dominant commercial Western categories.",
        url: "https://en.wikipedia.org/wiki/world_music_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "World Music - Concepts and Applications",
        content: "World music is a broad term often used for musical traditions outside dominant commercial Western categories. It can encompass diverse regional instruments, rhythms, languages, performance practices, and cultural contexts. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "World music is a broad term often used for musical traditions outside dominant commercial Western categories.",
        url: "https://en.wikipedia.org/wiki/world_music_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Cultural Heritage - Overview",
        content: "Cultural heritage includes traditions, knowledge, practices, monuments, objects, and places inherited from previous generations. Heritage may be tangible or intangible and can be preserved through documentation, education, conservation, and community practice. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Cultural heritage includes traditions, knowledge, practices, monuments, objects, and places inherited from previous generations.",
        url: "https://en.wikipedia.org/wiki/cultural_heritage_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Cultural Heritage - Concepts and Applications",
        content: "Cultural heritage includes traditions, knowledge, practices, monuments, objects, and places inherited from previous generations. Heritage may be tangible or intangible and can be preserved through documentation, education, conservation, and community practice. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Cultural heritage includes traditions, knowledge, practices, monuments, objects, and places inherited from previous generations.",
        url: "https://en.wikipedia.org/wiki/cultural_heritage_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Museum - Overview",
        content: "A museum collects, preserves, researches, and interprets objects or other forms of cultural and scientific heritage. Museums can specialize in art, history, natural science, technology, anthropology, or many other fields. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A museum collects, preserves, researches, and interprets objects or other forms of cultural and scientific heritage.",
        url: "https://en.wikipedia.org/wiki/museum_-_overview",
        fileType: 'WEB',
    },
    // ARTS MEDIA & CULTURE
    {
        title: "Museum - Concepts and Applications",
        content: "A museum collects, preserves, researches, and interprets objects or other forms of cultural and scientific heritage. Museums can specialize in art, history, natural science, technology, anthropology, or many other fields. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A museum collects, preserves, researches, and interprets objects or other forms of cultural and scientific heritage.",
        url: "https://en.wikipedia.org/wiki/museum_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Human Heart - Overview",
        content: "The human heart is a muscular organ that pumps blood through the circulatory system. It has four chambers and coordinated electrical activity that regulates contraction. The cardiovascular system delivers oxygen and nutrients and removes metabolic waste. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The human heart is a muscular organ that pumps blood through the circulatory system.",
        url: "https://en.wikipedia.org/wiki/human_heart_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Human Heart - Concepts and Applications",
        content: "The human heart is a muscular organ that pumps blood through the circulatory system. It has four chambers and coordinated electrical activity that regulates contraction. The cardiovascular system delivers oxygen and nutrients and removes metabolic waste. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The human heart is a muscular organ that pumps blood through the circulatory system.",
        url: "https://en.wikipedia.org/wiki/human_heart_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Human Lungs - Overview",
        content: "The lungs are organs of the respiratory system responsible for gas exchange. Air reaches microscopic alveoli where oxygen moves into blood and carbon dioxide moves out. Breathing is coordinated by respiratory muscles and the nervous system. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The lungs are organs of the respiratory system responsible for gas exchange.",
        url: "https://en.wikipedia.org/wiki/human_lungs_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Human Lungs - Concepts and Applications",
        content: "The lungs are organs of the respiratory system responsible for gas exchange. Air reaches microscopic alveoli where oxygen moves into blood and carbon dioxide moves out. Breathing is coordinated by respiratory muscles and the nervous system. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The lungs are organs of the respiratory system responsible for gas exchange.",
        url: "https://en.wikipedia.org/wiki/human_lungs_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Immune System - Overview",
        content: "The immune system protects the body from pathogens and abnormal cells. It includes physical barriers, innate immune mechanisms, and adaptive immune responses involving specialized cells and antibodies. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The immune system protects the body from pathogens and abnormal cells.",
        url: "https://en.wikipedia.org/wiki/immune_system_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Immune System - Concepts and Applications",
        content: "The immune system protects the body from pathogens and abnormal cells. It includes physical barriers, innate immune mechanisms, and adaptive immune responses involving specialized cells and antibodies. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The immune system protects the body from pathogens and abnormal cells.",
        url: "https://en.wikipedia.org/wiki/immune_system_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Digestive System - Overview",
        content: "The digestive system breaks food into nutrients that can be absorbed and used by the body. Major organs include the mouth, esophagus, stomach, small intestine, large intestine, liver, pancreas, and gallbladder. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The digestive system breaks food into nutrients that can be absorbed and used by the body.",
        url: "https://en.wikipedia.org/wiki/digestive_system_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Digestive System - Concepts and Applications",
        content: "The digestive system breaks food into nutrients that can be absorbed and used by the body. Major organs include the mouth, esophagus, stomach, small intestine, large intestine, liver, pancreas, and gallbladder. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The digestive system breaks food into nutrients that can be absorbed and used by the body.",
        url: "https://en.wikipedia.org/wiki/digestive_system_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Endocrine System - Overview",
        content: "The endocrine system consists of glands and tissues that produce hormones regulating processes such as metabolism, growth, reproduction, stress responses, and blood glucose. Hormones travel through the bloodstream to target cells. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The endocrine system consists of glands and tissues that produce hormones regulating processes such as metabolism, growth, reproduction, stress responses, and blood glucose.",
        url: "https://en.wikipedia.org/wiki/endocrine_system_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Endocrine System - Concepts and Applications",
        content: "The endocrine system consists of glands and tissues that produce hormones regulating processes such as metabolism, growth, reproduction, stress responses, and blood glucose. Hormones travel through the bloodstream to target cells. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The endocrine system consists of glands and tissues that produce hormones regulating processes such as metabolism, growth, reproduction, stress responses, and blood glucose.",
        url: "https://en.wikipedia.org/wiki/endocrine_system_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Nutrition - Overview",
        content: "Nutrition studies how organisms obtain and use nutrients and energy from food. Major nutrients include carbohydrates, proteins, fats, vitamins, minerals, water, and in some contexts dietary fiber. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Nutrition studies how organisms obtain and use nutrients and energy from food.",
        url: "https://en.wikipedia.org/wiki/nutrition_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Nutrition - Concepts and Applications",
        content: "Nutrition studies how organisms obtain and use nutrients and energy from food. Major nutrients include carbohydrates, proteins, fats, vitamins, minerals, water, and in some contexts dietary fiber. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Nutrition studies how organisms obtain and use nutrients and energy from food.",
        url: "https://en.wikipedia.org/wiki/nutrition_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Sleep - Overview",
        content: "Sleep is a recurring biological state associated with altered consciousness, reduced responsiveness, and characteristic brain and physiological activity. Healthy sleep supports memory, learning, immune function, mood, and physical recovery. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Sleep is a recurring biological state associated with altered consciousness, reduced responsiveness, and characteristic brain and physiological activity.",
        url: "https://en.wikipedia.org/wiki/sleep_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Sleep - Concepts and Applications",
        content: "Sleep is a recurring biological state associated with altered consciousness, reduced responsiveness, and characteristic brain and physiological activity. Healthy sleep supports memory, learning, immune function, mood, and physical recovery. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Sleep is a recurring biological state associated with altered consciousness, reduced responsiveness, and characteristic brain and physiological activity.",
        url: "https://en.wikipedia.org/wiki/sleep_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Exercise - Overview",
        content: "Physical exercise is planned or structured physical activity performed to improve or maintain fitness and health. Major categories include aerobic activity, resistance training, flexibility work, balance, and mobility. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Physical exercise is planned or structured physical activity performed to improve or maintain fitness and health.",
        url: "https://en.wikipedia.org/wiki/exercise_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Exercise - Concepts and Applications",
        content: "Physical exercise is planned or structured physical activity performed to improve or maintain fitness and health. Major categories include aerobic activity, resistance training, flexibility work, balance, and mobility. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Physical exercise is planned or structured physical activity performed to improve or maintain fitness and health.",
        url: "https://en.wikipedia.org/wiki/exercise_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Public Health - Overview",
        content: "Public health focuses on protecting and improving health at population level. It includes disease prevention, health promotion, environmental health, epidemiology, vaccination programs, health policy, and community interventions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Public health focuses on protecting and improving health at population level.",
        url: "https://en.wikipedia.org/wiki/public_health_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Public Health - Concepts and Applications",
        content: "Public health focuses on protecting and improving health at population level. It includes disease prevention, health promotion, environmental health, epidemiology, vaccination programs, health policy, and community interventions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Public health focuses on protecting and improving health at population level.",
        url: "https://en.wikipedia.org/wiki/public_health_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Epidemiology - Overview",
        content: "Epidemiology studies the distribution and determinants of health-related conditions in populations. Epidemiological methods help identify risk factors, understand outbreaks, evaluate interventions, and guide public health decisions. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Epidemiology studies the distribution and determinants of health-related conditions in populations.",
        url: "https://en.wikipedia.org/wiki/epidemiology_-_overview",
        fileType: 'WEB',
    },
    // HEALTH & HUMAN BODY
    {
        title: "Epidemiology - Concepts and Applications",
        content: "Epidemiology studies the distribution and determinants of health-related conditions in populations. Epidemiological methods help identify risk factors, understand outbreaks, evaluate interventions, and guide public health decisions. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Epidemiology studies the distribution and determinants of health-related conditions in populations.",
        url: "https://en.wikipedia.org/wiki/epidemiology_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "International Space Station - Overview",
        content: "The International Space Station is a large modular laboratory in low Earth orbit operated through international cooperation. It supports scientific experiments, technology demonstrations, Earth observation, and long-duration human spaceflight research. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The International Space Station is a large modular laboratory in low Earth orbit operated through international cooperation.",
        url: "https://en.wikipedia.org/wiki/international_space_station_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "International Space Station - Concepts and Applications",
        content: "The International Space Station is a large modular laboratory in low Earth orbit operated through international cooperation. It supports scientific experiments, technology demonstrations, Earth observation, and long-duration human spaceflight research. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The International Space Station is a large modular laboratory in low Earth orbit operated through international cooperation.",
        url: "https://en.wikipedia.org/wiki/international_space_station_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "James Webb Space Telescope - Overview",
        content: "The James Webb Space Telescope is a large space observatory designed primarily for infrared astronomy. Its observations help study early galaxies, star and planet formation, exoplanet atmospheres, and objects within our Solar System. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The James Webb Space Telescope is a large space observatory designed primarily for infrared astronomy.",
        url: "https://en.wikipedia.org/wiki/james_webb_space_telescope_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "James Webb Space Telescope - Concepts and Applications",
        content: "The James Webb Space Telescope is a large space observatory designed primarily for infrared astronomy. Its observations help study early galaxies, star and planet formation, exoplanet atmospheres, and objects within our Solar System. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The James Webb Space Telescope is a large space observatory designed primarily for infrared astronomy.",
        url: "https://en.wikipedia.org/wiki/james_webb_space_telescope_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Mars Exploration - Overview",
        content: "Mars is a rocky planet with a thin atmosphere and evidence of ancient water activity. Robotic missions have studied its geology, climate, surface chemistry, and potential habitability. Mars remains a major target for future exploration. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Mars is a rocky planet with a thin atmosphere and evidence of ancient water activity.",
        url: "https://en.wikipedia.org/wiki/mars_exploration_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Mars Exploration - Concepts and Applications",
        content: "Mars is a rocky planet with a thin atmosphere and evidence of ancient water activity. Robotic missions have studied its geology, climate, surface chemistry, and potential habitability. Mars remains a major target for future exploration. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Mars is a rocky planet with a thin atmosphere and evidence of ancient water activity.",
        url: "https://en.wikipedia.org/wiki/mars_exploration_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Moon - Overview",
        content: "The Moon is Earth's natural satellite and strongly influences ocean tides. It is tidally locked to Earth, meaning the same side generally faces our planet. The Moon has been visited by crewed Apollo missions and numerous robotic spacecraft. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "The Moon is Earth's natural satellite and strongly influences ocean tides.",
        url: "https://en.wikipedia.org/wiki/moon_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Moon - Concepts and Applications",
        content: "The Moon is Earth's natural satellite and strongly influences ocean tides. It is tidally locked to Earth, meaning the same side generally faces our planet. The Moon has been visited by crewed Apollo missions and numerous robotic spacecraft. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "The Moon is Earth's natural satellite and strongly influences ocean tides.",
        url: "https://en.wikipedia.org/wiki/moon_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Satellite - Overview",
        content: "A satellite is an object placed in orbit around a celestial body. Artificial satellites support communication, navigation, weather observation, Earth imaging, scientific research, and military applications. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A satellite is an object placed in orbit around a celestial body.",
        url: "https://en.wikipedia.org/wiki/satellite_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Satellite - Concepts and Applications",
        content: "A satellite is an object placed in orbit around a celestial body. Artificial satellites support communication, navigation, weather observation, Earth imaging, scientific research, and military applications. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A satellite is an object placed in orbit around a celestial body.",
        url: "https://en.wikipedia.org/wiki/satellite_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Rocket - Overview",
        content: "A rocket generates thrust by expelling mass and can operate in space without relying on surrounding air. Rockets use principles of momentum conservation and can employ liquid or solid propellants. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A rocket generates thrust by expelling mass and can operate in space without relying on surrounding air.",
        url: "https://en.wikipedia.org/wiki/rocket_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Rocket - Concepts and Applications",
        content: "A rocket generates thrust by expelling mass and can operate in space without relying on surrounding air. Rockets use principles of momentum conservation and can employ liquid or solid propellants. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A rocket generates thrust by expelling mass and can operate in space without relying on surrounding air.",
        url: "https://en.wikipedia.org/wiki/rocket_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Exoplanet - Overview",
        content: "An exoplanet is a planet outside our Solar System. Astronomers detect exoplanets using techniques such as transit photometry and radial velocity measurements. Thousands of confirmed exoplanets reveal a wide diversity of planetary systems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "An exoplanet is a planet outside our Solar System.",
        url: "https://en.wikipedia.org/wiki/exoplanet_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Exoplanet - Concepts and Applications",
        content: "An exoplanet is a planet outside our Solar System. Astronomers detect exoplanets using techniques such as transit photometry and radial velocity measurements. Thousands of confirmed exoplanets reveal a wide diversity of planetary systems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "An exoplanet is a planet outside our Solar System.",
        url: "https://en.wikipedia.org/wiki/exoplanet_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Space Telescope - Overview",
        content: "A space telescope observes astronomical objects from outside Earth's atmosphere. Space-based observatories can avoid atmospheric absorption and turbulence and can observe wavelengths that are blocked or distorted by the atmosphere. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "A space telescope observes astronomical objects from outside Earth's atmosphere.",
        url: "https://en.wikipedia.org/wiki/space_telescope_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Space Telescope - Concepts and Applications",
        content: "A space telescope observes astronomical objects from outside Earth's atmosphere. Space-based observatories can avoid atmospheric absorption and turbulence and can observe wavelengths that are blocked or distorted by the atmosphere. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "A space telescope observes astronomical objects from outside Earth's atmosphere.",
        url: "https://en.wikipedia.org/wiki/space_telescope_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Quantum Computing - Overview",
        content: "Quantum computing uses quantum-mechanical states to represent and manipulate information. Quantum bits can exhibit superposition and entanglement, while quantum algorithms can provide advantages for specific computational problems. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Quantum computing uses quantum-mechanical states to represent and manipulate information.",
        url: "https://en.wikipedia.org/wiki/quantum_computing_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Quantum Computing - Concepts and Applications",
        content: "Quantum computing uses quantum-mechanical states to represent and manipulate information. Quantum bits can exhibit superposition and entanglement, while quantum algorithms can provide advantages for specific computational problems. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Quantum computing uses quantum-mechanical states to represent and manipulate information.",
        url: "https://en.wikipedia.org/wiki/quantum_computing_-_concepts_and_applications",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Nanotechnology - Overview",
        content: "Nanotechnology involves understanding and manipulating matter at extremely small scales, commonly around the nanometer range. Applications include electronics, medicine, materials, sensors, energy, and surface engineering. This overview covers the definition, important concepts, common uses, and practical relevance of the topic.",
        description: "Nanotechnology involves understanding and manipulating matter at extremely small scales, commonly around the nanometer range.",
        url: "https://en.wikipedia.org/wiki/nanotechnology_-_overview",
        fileType: 'WEB',
    },
    // SPACE & TECHNOLOGY
    {
        title: "Nanotechnology - Concepts and Applications",
        content: "Nanotechnology involves understanding and manipulating matter at extremely small scales, commonly around the nanometer range. Applications include electronics, medicine, materials, sensors, energy, and surface engineering. Important concepts include terminology, core principles, common implementations, advantages, limitations, and real-world applications.",
        description: "Nanotechnology involves understanding and manipulating matter at extremely small scales, commonly around the nanometer range.",
        url: "https://en.wikipedia.org/wiki/nanotechnology_-_concepts_and_applications",
        fileType: 'WEB',
    },
];

async function seedGeneralData() {
    console.log('\n╔══════════════════════════════════════════════════════════════╗');
    console.log('║       VedEngine Expanded Knowledge Database Seeder         ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log(`\n📋 Total entries to seed: ${GENERAL_DATA.length}`);

    let inserted = 0;
    let skipped = 0;
    let failed = 0;

    for (const entry of GENERAL_DATA) {
        try {
            const existing = await prisma.document.findFirst({
                where: { url: entry.url },
                select: { id: true },
            });

            if (existing) {
                console.log(`  ⏭ Already exists: ${entry.title}`);
                skipped++;
                continue;
            }

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

    console.log('\n╔══════════════════════════════════════════════════════════════╗');
    console.log('║                    SEEDING COMPLETE                         ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log(`\n📊 Results:`);
    console.log(`   ✅ Inserted:  ${inserted}`);
    console.log(`   ⏭ Skipped:   ${skipped}`);
    console.log(`   ❌ Failed:    ${failed}`);
    console.log(`   📦 Total:     ${GENERAL_DATA.length}`);
    console.log(`\n🎉 VedEngine database is now populated with expanded knowledge!\n`);

    await prisma.$disconnect();
}

seedGeneralData().catch((err) => {
    console.error('💥 Seeder crashed:', err);
    prisma.$disconnect();
    process.exit(1);
});