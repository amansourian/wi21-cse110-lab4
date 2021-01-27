# Part 3. Debugging using the DevTools

## DevTools - Debugging

- What was the bug?
The bug was that num1 and num2 were being read as strings so when we tried to add them it wasn't integer addition it was string concatenation.
- How would you fix it?
I would convert them to type Number before summing, as seen in screenshot3.jpg in directory.

## DevTools - Network Tab

1. What is the name of the new json file?
`citylots.json`

2. Which file initiated the download of the new file?
`part2.js` 

3. What is its file size?
11.7 MB

4. How long did it take to download?
2.74 s

5. What was your User-Agent for the browser that made the request?
User-Agent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36`

6. In the response, what type of server did it come from?
Apache

7. When was the file last modified?
Last-Modified: `Tue, 26 Jan 2021 22:14:13 GMT`

8. What was the Content-Type of the file?
Content-Type: `application/json`

9. Which method inside the initiating file made the request?
`fetchData()`






