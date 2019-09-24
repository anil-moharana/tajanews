
## Description:
###### *NewsApp created using ReactJS,Axios,Html,CSS,Semantic UI which will show the latest news.*

## Steps to Run:
###### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
###### To run this app,You need to create a free developer account in https://newsapi.org/.
###### Get the key from NewsApi and add the key in App.js,then only You can be able to hit newsapi and get data.
###### npm start
###### Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

![](/src/Tajanews.png?raw=true)

## Code Explanation:
###### Created mutiple react components  Sidebar,HeaderIcon,SubHeader,Anchor.
###### Configuring  Api details for reuusability in NewsApi.js
###### On clicking of any menu categories,calling newsapi by passing required request params and getting the response.
###### Added Async and await to handle async response handling while hitting api.
###### Parsing the Json Response from News api,updating the state and sending the Objects to NewsList,NewsItem.
###### Showing all the List of news items 
###### Creating NewsContent and making it unscrollable to show Particlar NewsItem with more detailed manner When Clicked any of the    newsitem.
###### Showing Bydefault first newsitem from the list using NewsContent.
###### When any of the list items clicked,upadting the state and re-rendering NewsContent.
