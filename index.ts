import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();
const separator = "\n ----------------------------------------------------------------------------------------------------------- \n"

async function main() {

    // Random Jhon
    /* const nrJhon = (Math.random()*10000).toFixed(0) */

    // Create user
    /* const user = await prisma.user.create({
        data: {
            name: "Jhon Doe "+nrJhon,
            email: "jhon"+nrJhon+"@gmail.com"
        }
    }) 

    console.log("inserted user: \n", user, separator);*/

    // Get all users
    /* const users = await prisma.user.findMany();

    console.log("all users: \n", users, separator); */

    //create article and associate it w/ user
    /* const article = await prisma.article.create({
        data: {
            title:"jhon 364 second article",
            body: "this is jhon 364 second article",
            author:{
                connect: {
                    id:"6650521c9616c52574f1317c"
                },
            },
        },
    });

    console.log(article); */

    //get all articles
    /* const articles = await prisma.article.findMany();

    console.log(articles); */

    // create user and article and association
    /* const userWarticle = await prisma.user.create({
        data: {
            name: "sara smith",
            email: "sara@gmail.com",
            articles:{
                create: {
                    title: "sara fist article",
                    body: "this is sara first article"
                }
            }
        }
    }) 

    console.log(userWarticle);*/

    // Get all users && articles
    /* const usersWarticles = await prisma.user.findMany({
        include: {
            articles: true
        }
    });

    console.log("all users: \n", usersWarticles, separator); 
    
    //loop over users
    usersWarticles.forEach((user) => {
        console.log(`User: ${user.name}, Email: ${user.email}`);
        console.log(`Articles:`);
        if(!user.articles.length) console.log("No article for user", user.name);
        user.articles.forEach((article)=>{
            console.log(`-Title: ${article.title}\nBody: ${article.body}`);
        });
        console.log(separator);
    }) */

    // Update user 665051d89dc2a35b4e58b1c2 data
    /* const userUpdate = await prisma.user.update({
        where:{
            id: "665051d89dc2a35b4e58b1c2"
        },
        data: {
            name: "Jhon Doe 104"
        }
    }) 

    console.log(userUpdate);*/

    // Remove data 6650524d3f76ea70cc15157f (Jhon Doe 5780)
    /* const removeUser = await prisma.user.delete({
        where: {
            id: "6650524d3f76ea70cc15157f"
        }
    })

    console.log(removeUser); */

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })