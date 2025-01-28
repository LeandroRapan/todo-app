import Head from "next/head";
import Header from "@/components/Header";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";


export default function Home() {
    return (
        <>
            <Head>
                <title>TODO App</title>
                <meta name="description" content="TODO App with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="app-container">
                <Header />
                <TaskInput />
                <TaskList />
            </div>
        </>
    );
}