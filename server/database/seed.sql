-- User is not requried to run this, but this will give them some mock 

-- USERS table
INSERT INTO users (first_name, last_name, email) VALUES
('John', 'Doe', 'john.doe@tornado.com'),
('Jane', 'Doe', 'jane.doe@tornado.com'),
('Sample', 'Tornado', 'sample.tornado@tornado.com');

-- POSTS table
INSERT INTO posts (user_id, title, content, category, subcategory) VALUES
((SELECT id FROM users WHERE email = 'john.doe@tornado.com'), 
'What number will we start have the letter ''A'' in the spelling of our numbers?', 
'If we spell our numbers out like this...
1 = One	
2 = Two
3 = Three	
4 = Four
5 = Five	
6 = Six
7 = Seven
8 = Eight
9 = Nine	
10 = Ten
11 = Eleven	
12 = Twelve
13 = Thirteen	
14 = Fourteen
15 = Fifteen	
16 = Sixteen
17 = Seventeen	
18 = Eighteen
19 = Nineteen	
20 = Twenty
21 = Twenty-one	
22 = Twenty-two
23 = Twenty-three	
24 = Twenty-four
25 = Twenty-five	
26 = Twenty-six
27 = Twenty-seven	
28 = Twenty-eight
29 = Twenty-nine	
30 = Thirty
31 = Thirty-one	
32 = Thirty-two
33 = Thirty-three	
34 = Thirty-four
35 = Thirty-five	
36 = Thirty-six
37 = Thirty-seven	
38 = Thirty-eight
39 = Thirty-nine	
40 = Forty
41 = Forty-one	
42 = Forty-two
43 = Forty-three	
44 = Forty-four
45 = Forty-five	
46 = Forty-six
47 = Forty-seven	
48 = Forty-eight
49 = Forty-nine	
50 = Fifty
51 = Fifty-one	
52 = Fifty-two
53 = Fifty-three	
54 = Fifty-four
55 = Fifty-five	
56 = Fifty-six
57 = Fifty-seven	
58 = Fifty-eight
59 = Fifty-nine	
60 = Sixty
61 = Sixty-one	
62 = Sixty-two
63 = Sixty-three	
64 = Sixty-four
65 = Sixty-five	
66 = Sixty-six
67 = Sixty-seven	
68 = Sixty-eight
69 = Sixty-nine	
70 = Seventy
71 = Seventy-one	
72 = Seventy-two
73 = Seventy-three	
74 = Seventy-four
75 = Seventy-five	
76 = Seventy-six
77 = Seventy-seven	
78 = Seventy-eight
79 = Seventy-nine	
80 = Eighty
81 = Eighty-one	
82 = Eighty-two
83 = Eighty-three	
84 = Eighty-four
85 = Eighty-five	
86 = Eighty-six
87 = Eighty-seven	
88 = Eighty-eight
89 = Eighty-nine	
90 = Ninety
91 = Ninety-one	
92 = Ninety-two
93 = Ninety-three	
94 = Ninety-four
95 = Ninety-five	
96 = Ninety-six
97 = Ninety-seven	
98 = Ninety-eight
99 = Ninety-nine	
100 = One hundred

We will have to get all the way to 1000, before A comes. 

fun fact credited to https://www.today.com/life/inspiration/interesting-facts-rcna130243',
 'Fun Facts', 
 'Fun Facts'
), 

((SELECT id FROM users WHERE email = 'jane.doe@tornado.com'), 
'The Eagle Story', 
'THIS IS THE STORY OF AN EAGLE

The Eagle has the longest life-span of its species. It can live up to 70 years
First of all a species is one type of animal, like the bald eagle or golden eagle, so, are they referring to one particular, extra special, eagle within his particular species? But let''s assume they actually mean genus or family, in other words, eagles in general. Generally speaking, eagles live around 30 years in the wild. Sometimes they do live longer in captivity due to a consistent food supply, veterinarian care, and shelter from extreme weather. But 70 years is not common and even quite unlikely.

But to reach this age, the eagle must make a hard decision. In its 40th year...
In other words... 10 years after it should already be dead.

...its long and flexible talons can no longer grab prey which serves as food. Its long and sharp beak becomes bent.
"Its old, aged and heavy wings, due to their thick feathers, stick to its chest and make it difficult to fly."(More on this later.) 

Then, the eagle is left with only two options: DIE or go through a painful process of CHANGE which lasts 150 days. The process requires that the eagle fly to a mountaintop and sit on its nest. There the eagle knocks its beak against a rock until it plucks it out. Then the eagle will wait for a new beak to grow back...
An eagle''s beak is made of keratin, like human fingernails. Like our fingernails, an eagle''s beak is constantly growing. Eagles tear at tough foods and wipe their beaks against hard objects like branches or even rocks to keep them clean. This process also helps keep the beak in magnificent shape throughout an eagle''s entire life. The loss of a beak in the wild would be certain death to any bird of prey.

...and then it will pluck out its talons
The talons are also made of keratin, like human fingernails. And so the talons too are constantly growing. Grabbing and killing prey keeps the talons sharp as well as prevents them from becoming too long. If they got soft, there would be something seriously wrong with the bird. The talons are what an eagle uses to catch food. To pluck them out would not only be extremely difficult and painful, but would also take away their ability to provide food for themselves. And, most importantly, when a raptor loses a talon in this fashion, it is possible it will not grow back and the loss of blood can be horrific. Therefore, it would die of starvation even if it survived the likely infection caused by plucking out its talons.

When it''s new talons grow back, the eagle starts plucking its old, aged feathers.
Birds naturally lose their feathers & regrow them in a process called molting. Eagles go through a molt roughly once a year throughout their lives. During a molt, old feathers naturally fall out and new ones grow in to take their place. There is no pulling of the feathers. Some bird species do lose most of their feathers at one time and are forced to hide until the grow back, but not raptors like eagles. Flight (wing and tail) feathers drop out one by one and are replaced one by one, not all at once so that the animal can continue to fly and catch food. Plus, jerking out its feathers could also cause permanent damage the feather follicle so no feather grows back. Without feathers, a bird is unable to fly. If they cannot fly they cannot hunt for food or escape predators that cross their path. Both cases would obviously lead to the death of the bird

And after 5 months, the eagle takes its famous flight of rebirth and lives for 30 more years

Again, they just don''t live that long. But, flight of rebirth? Maybe they are referring to the mythical phoenix? Since these eagle facts are all total myth it must be a phoenix they are talking about

Why is change needed? Many times, in order to survive we have to start a change process. We sometimes need to get rid of old memories, habits and other past traditions. Only freed from past burdens, can we take advantage of the present.

credit to : https://www.reptilegardens.com/scales-and-tales/article/the-real-story-of-an-eagle/', 
'Stories', 
'Mindset'
), 

((SELECT id FROM users WHERE email = 'sample.tornado@tornado.com'), 
'2025 technology industry outlook', 
'The technology industry navigated headwinds from 2022 to 2023, including high inflation, elevated interest rates, and considerable macroeconomic and global uncertainties. These contributed to softened consumer spending, lower product demand, falling market capitalizations, and workforce reductions.1 As we launched the 2024 edition of the Deloitte Technology Outlook, analysts were optimistic that the tech sector would return to modest growth.2 Tech executives we surveyed agreed: Sixty-two percent felt the tech industry would be “healthy” or “very healthy” in 2024, and the same number thought the time was right for their company to take greater risks.3

At mid-decade, the tech sector appears positioned for growth. Some analysts project that global IT spending will grow by 9.3% in 2025, with data center and software segments expected to grow at double-digit rates.4 Worldwide spending on AI is anticipated to grow at a compound annual growth rate of 29% from 2024 to 2028.5 Although the tech layoff trend persisted in 2024, reductions appeared to slow compared to 2023.6

A year ago, Deloitte proposed that tech companies refocus their sights on innovation and growth. We suggested that tech leaders consider shifting or augmenting their offerings to meet the growing demand for cloud, AI, and cybersecurity solutions.7 We anticipated that 2024 would be a transitional year for generative AI, as tech companies experimented with applications and determined how to best deliver and monetize gen AI capabilities. As geopolitical unrest and supply chain volatility continued, we noted that tech leaders may want to work toward a balance between globalization and self-reliance, and to consider how to diversify their supply chains and operations among trusted regions for redundancy. Finally, we discussed upcoming regulations and their potential impact on the tech industry.

These recommendations remain as relevant as ever. As generative AI moves from pilots to production deployments and global developments reveal new areas of risk and opportunity, we have updated our suggestions for 2025...
credited to https://www2.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/technology-industry-outlook.html?id=us:2ps:3gl:techout25:awa:tmt:031025:technology%20report:b:c:kwd-40898242&gad_source=1&gclid=CjwKCAjwwLO_BhB2EiwAx2e-3ycMAj_ZEt33rkZkyEGw9g98FrwFSUQacK5Lnm7ZQl5sipQmA_tNShoCgpgQAvD_BwE', 
'Tech', 
'Startup'
);

-- ACHIEVEMENTS table
INSERT INTO achievements (points, title) VALUES
(100, 'EF1'),
(80, 'EF0'),
(50, 'EF0');

-- USERS_ACHIEVEMENTS table
INSERT INTO user_achievements (user_id, achievement_id) VALUES
((SELECT id FROM users WHERE email = 'john.doe@tornado.com'), (SELECT id FROM achievements WHERE title = 'EF1')),
((SELECT id FROM users WHERE email = 'jane.doe@tornado.com'), (SELECT id FROM achievements WHERE title = 'EF0' AND points ='80')),
((SELECT id FROM users WHERE email = 'sample.tornado@tornado.com'), (SELECT id FROM achievements WHERE title = 'EF0' AND points ='50'));