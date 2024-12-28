import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import ViewAllJobs from "../components/ViewAllJobs";
import JobLists from "../components/JobListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobLists />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
