<h1 align='center'>ACM-PEC-Website</h1>
This is the official website of PEC ACM student chapter. This is an Open-Source project. Feel free to contribute in it.

<br/><br/>

## Steps to Run the code for the first time or whenever you take a Pull

1. ### Open a Terminal/Cmd in the project folder
2. ### Install the npm packages by running the following command <br> 
    `npm install`
    #### This step is very important. If you don't do this, you may run into error of missing dependencies
3. ### Start the server by running <br>
    `npm start`
4. ### A new window will open in your default browser at 
    > localhost:3000

<br>

## How to install a dependency and add it in package.json file

#### This will save the depedency in package.json file so that others can install it on their system before running the code.

1. ### run the following command to save a package as a dependency
    `npm install --save *dependency_name*`
    > These are those dependencies which are required at runtime as well as during development.
    

2. ### run the following command to save a package as a dev dependency
    `npm install --save-dev *dependency_name*`
    > These are those dependencies which are only required during development.

<br/><br/>  
  
    
<h1 align='center'><u>Making PRs</u></h1>  

### 1. Fork the repo. 
<br/>

### 2.  Clone the repo.     
  Either download the zip source code, or copy the URL, create a new folder     
  ```git init``` and ```git clone https://github.com/<username>/ACM-PEC-Website```
  <br/> 
  
### 3. This will give you access to all branches of the origin through remote. You need to now fetch all branches    
```git fetch```    
<br/> 

### 4. ```git checkout master``` and create a copy of this branch ```git checkout -b <new-branch>```    
<br/>

### 5. You can make your changes in this branch and if you are using VS Code Version Control it will show you beautifully all the changes made.    
<br/>

### 6. Last step is to make changes visible on cloud    
```git add .``` -> ```git commit -m "relevant_msg"``` -> ```git push origin master```    
<br/>

### 7. You can come to your forked repo and create the PR.    
<br/>

<br/>
Happy Contributing!! :)  
<br/> <br/>

## Announcments




