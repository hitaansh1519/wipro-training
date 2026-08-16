Regex is simply a way to identify patterns inside the text.
 
Real world exaples
1. Mobile number Validation
 
Suppose your company only accepts Indian mobile number.
It should contain 10 digits.
It should start from 6, 7, 8, 9.
Should not contain letters
 
Without the regex, developers would write many conditions manually
Regex allows developers to describe the entire pattern in one place.
 
Regex is everywhere.
 
2. Email validation
 
hello
hello@
@yahoo.com
test@gmail
 
The password reset email will not work. The system must identify first whether the entered text looks like a valid email structure.
 
Regex helps your system recognise:
1. Text before @
2. Proper domain
3. Valid format
 
Every time you log in to Instagram, Amazon, LinkedIn, banking app, regex is probably involved somewhere in validating your email.
 
3. Password security.
 
Companies do not want weak passwords because weak password can cause hacking risk.
 
Regex helps identify whether the password follows the required structure or not,
- Banking Apps
- Company Portals
- Social Media
- Payment Systems
 
4. OTP system
Suppose the requirement is OTP should contain exactly six digits.
 
12
abcd    /^[0-9]{6}$/
123456789
 
Regex will help you identify just the digits, exact length, no extra character.
 
5. Search engines
 
Suppose the user searches for
iphone
IPHONE
iPhone
 
Search system need flexible matching
 
Regex helps applications idetify patterns regardless of capitalization or formatting differences.
 
Regex is used in:
- Google search
- website filters
- product searches
- log searching
 
Regex is not just validation. It is also used for searching and matching.
 
6. Social Media
Social media websites receive millions of comments every hour.
Human cannot manually read everything
 
Platforms automatically scan comments for abusive words, spam links, fraud messages, and suspicious patterns.
 
Regex helps the system quickly detect unwanted text patterns
for example:
- Youtube comments
- Instagram moderation
- chat systems
- gaming chats
 
Regex is helping platforms control content automatically
 
7. Extracting useful information
 
Suppose a message says
Rs 4,500 debited from account ending 1234.
 
Regex helps systems pull useful information from huge blocks of text. This is used in banking apps, invoice systems, analytics, and automation testing.
 
Regex is not just for validation; it is also for data extraction.
 
8. Automation testing.
Suppose a software tester validation this  URL.
/order/8535337
 
Tomorrow the number changes.
/order/8545637
 
If you are looking for an exact match, It is going to break. Regex helps testers create flexible validations. This is used for dynamic text, your logs, error messages, and API responses.
 
So developrs needed a compact way to describe text patterns. That compact pattern language is called regex
 
Normal Search = - "cat
Regex search - We are looking for a pattern, meaning three digits in a row.

Symbol	Meaning
.	any character
\d	digit
\D	non-digit
\w	word character
\W	non-word character
\s	whitespace
\S	non-whitespace


Quantifiers
Quantifiers tell regex how many times something should appear/repeat
+	one or more
*	zero or more
?	optional
^	start
$	end
{n} Exactly n times

Range quantifier
Range quantifiers let us degine minimum and maximum repititions.

{min, max}
/a{2, 4}/
 
1. A regex is not just a word, it's rule/pattern.
/c.t/ -> cat, cot, cut, c@t, educate
 
ct, cart, c--t   <- no matches
 
.(Dot) -> Any single character
 
2. Regex works with strings and numbers. We use it to search, check, validate, extract, or replace patterns.
 
a. Check if a password has any digit.
piyushxyz123
 
/\d/.test("piyushxyz123")     -> return true
/\d/.test("piyushxyz")        -> return false
 
\d - It is actually a pattern. Find any digit. Any digit from 0 to 9.
It matches exactly one digit.
It does not mean the whole string must be a number.
 
Can you find at least one digit anywhere?
 
test() - It asks a yes/no question. It checks if the pattern exists inside the string.
 
/\d/.test("pass123")        -> true
/\d/.test("pass")           -> false
 
b. Find all the phone numbers in a text.
 
"Call 98765 or 12345".match(/\d+/g)      -> Output: ["98765", "12345"]
 
match() - Search the text and return whatever matches the pattern.
 
\d means - any digit (0 - 9)
+ means - one or more times
g means Global. give me all the matches, not just the first one.
 
\d+ means A group of one or more digits
 
c. Replace multiple spaces with one.
 
//replace(replaceWhat, replaceWith)
"hi    there".replace(/\s+/g," ")
"hi    there    Mate".replace(/\s+/g," ")
 
/\s+/g   -> This regex is searching for one or more `continuous` spaces.
 
g means keep searching after finding a match.
 
"hi    there    ".replace(/\s+/," ")  -> Find all the places where there are multiple spaces togehter and replace them with exactly a single space.
 
\s means any whitespace character
This includes space, tab, new line.
 
\s+ Means a group of one or more spaces together(continuous spaces).
 
/\d/
 
/[A-Z]/
Square brackets mean match one character from this entire list.
A-Z Means any upper case letter from A to Z
/[A-Z]/ MEans find any one upeercase letter anywhere in the string.
 
It does not mean all the letter must be upper case.
It does not mean the string must be with uppercase.
It means at least one uppercase letter.
 
/[A-Z]/.test("Password")      ->   true
/[A-Z]/.test("PassWord")      ->   true
/[A-Z]/.test("password")      ->   false
/[A-Z]/.test("123ABC")        ->   true
/[A-Z]/.test("123")           ->   false
 
Statements
This checks if the string is all uppercase. False
It checks if one uppercase exists. True
 
If we wanted all upper case, the regex would be different.
 
Square brackets mean OR,not AND. Any one of the characters inside is enough.
 
[] ->One character from the list
A-Z -> Uppercase letter
/[A-Z]/ Contains at least one uppercase
 
Find words ending with ing.
/ing$/
$ Means the end of the string
 
The dollar tells regex nothing should come after this.
 
Examples -
 
/ing$/.test("testing")    -> true
/ing$/.test("running")    -> true
/ing$/.test("coding")    -> true
 
/ing$/.test("testing 123")    ->false
/ing$/.test("ingress")    -> false
/ing$/.test("bring it")    -> false
 
Stements
Does this mean the word starts with ing ?    False
Does it match anywhere >     False
 
^ing   -> Starts with ing
ing$   -> Ends with ing
 
A normal search is like saying, "I want the exact red shirt."
Regex is like saying I want any shirt that is red and has long sleeves.
 
"Samiksha"
/Samiksha/
 
Exercises -
"abc123xyz".match(/\d/)         --> '1'
"abc123xyz".match(/\d+/)        --> ['123']
"123abc456".match(/\d/g)        --> [ '1', '2', '3', '4', '5', '6' ]
"123abc456".match(/\d+/g)       --> ["123", "456"]
 
/\d/.test("abc") -> false
/\d/.test("abc5") -> true
/[A-Z]/.test("hello") -> false
/[A-Z]/.test("Hello") -> true
 
"hi    there".replace(/\s+/, "-")                -->hi-there
"hi    there   friend".replace(/\s+/, "-")      -->hi-there-friend
"hi there".replace(/\s+/g)                      -->hiundefinedthere
 
"hi  there".match(/\s+/g)                       -->[ '  ' ]
 
 
Regex is like telling the computer: "Don't just look for exact words, look for this kind of pattern."

Regex lets you search based on rules, not exact names.
 
/\d{5}/
\d means any digit from 0 to 9
{5} means exactly five times
 
Not at least five. Not at most five, but exactly 5.
/\d{5} Means exactly five digits, one after the other, with no gaps
 
Examples
/\d{5}/.test("12345")                  --> true
/\d{5}/.test("Order 54321")            --> true
/\d{5}/.test("abc12345xyz")            --> true
 
Somewhere in the string, five digits appear consecutively.
/\d{5}/.test("1234")           ->false
/\d{5}/.test("12 345")         ->false
/\d{5}/.test("123-45")         ->false
 
Statements
Does this means the string must be exactly 5 digits?
No, It only means five digits must appear somewhere
 
If you wanted only five digits and nothing else
/^\d$/
 
This is commonly used to detect things like PIN codes, ZIP codes, OTPs.
Curly braces {} control how many times something repeats.
 
"Call 98765 or 12345".match(/\d+/g)      -> ['98765', '12345']
"Call 98765 or 12345".match(/\d/g)       -> ['9', '8', .......'5']
 
Use \d+ when you want full numbers, not individual digits.


\1\1

Store the first letter.
\1 -> Means repeat the stored letter.
-> means same letter repeated two more times

Instead of /([a-zA-Z]) \1\1/, we have a simpler way
/(.)\1\1/

. Means any character
111

aaa

[] bracket mathces only one character and not the word
it will not be the same as and it


Phone validation 
/^\d{10}$/

Anchors - ^ and $

Replace Every K-th Word with Its Length
Caption Shortener
A social media app wants to shorten captions by replacing every k-th word with its character count.
Sample Input
2
Coding challenges are amazing to solve
Sample Output
Coding 10 are 7 to 5