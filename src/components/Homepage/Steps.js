import React from "react";

const Steps = () => {
  return (
    <>
      <div className="steps-container">
        <div className="title">
          <h2>Getting Started is Easy !</h2>
        </div>
        <section className="number-to-the-left">
          <div className="num-container">
            <div className="num">
              <h3>1</h3>
            </div>
          </div>
          <div className="container">
            <div>
              <h2>Discover your interests</h2>
              <div className="step-details">
                <p>
                  Explore a wide range of topics and subjects that match your
                  interests and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="number-to-the-right">
          <div className="container">
            <div>
              <h2>Connect with experienced tutors</h2>
              <div className="step-details">
                <p>
                  Explore their profiles, qualifications, and teaching approach
                  to find the perfect fit for your learning journey.
                </p>
              </div>
            </div>
          </div>
          <div className="num-container">
            <div className="num">
              <h3>2</h3>
            </div>
          </div>
        </section>

        <section className="number-to-the-left">
          <div className="num-container">
            <div className="num">
              <h3>3</h3>
            </div>
          </div>
          <div className="container">
            <div>
              <h2>Book a lesson or enroll in a course</h2>
              <div className="step-details">
                <p>
                  Start your learning journey with ease and convenience.
                  Register and manage your lessons.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="centered">
          <div className="text-container">
            <div>
              <h2>And be part of the learning community !</h2>
              <div className="step-details">
                <p>
                  Connect with fellow learners, participate in discussions, and
                  exchange knowledge and insights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Steps;
