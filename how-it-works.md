---
layout: page
title: How it works?
---

<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 box darkblue-bg wow animate fadeIn">
            <div class="max-height-header-content">
                <div class="row article-header-content">    
                    <div class="col-xs-12 col-sm-7 col-lg-7 p1">
                        <h3 class="visible-xs visible-sm visible-md visible-lg white">
                            Data</h3>
                        <h1 class="hidden-xs hidden-sm hidden-md visible-lg maxwidth-big-headline thin white">
                            Veridu's data analysis process
                        </h1>
                        <h2 class="visible-xs visible-sm visible-md hidden-lg maxwidth-small-headline thin white">
                            Veridu's data analysis process
                        </h2>
                        <div class="divider-header-5"></div>
                        <div>
                            <a target="blank" class="secondary-negative-button" target="blank" href="./pdf/DataAnalysis.pdf">Download as PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid divider">
    <div class="row">
        <div class="col-xs-12 col-sm-7 col-lg-8 box box-text white-bg wow animate fadeIn">
            <div class="tl-line">
            </div>
            <h2 class="thin">
                Analysing a digital footprint
            </h2>
            <p class="light">
                Your digital footprint contains a staggering amount of information about you, and that's what Veridu uses to verify your identity. But how do we make sense of a mass of unstructured data? How do we work out what's important? And how do we know the data is credible?
            </p>
            <p class="light">
                Here's how.
            </p>
            <p class="light">
                Veridu's identity verification solutions rely on a combination of a rules-based engine, developed over a number of years, and a machine learning framework. By training our machine learning models using controlled data (data that we know to be real or fake), we can develop highly accurate models to instantly predict the credibility of a user's digital footprint.
            </p>
            <h2 class="thin">
                Why machine learning?
            </h2>
            <p class="light">
                Machine learning offers significant benefits over a purely rules-based approach. Once our models are trained using controlled data, they continue to learn and evolve as they process user information in a real-life environment.
            </p>
            <p class="light">
                This continual evolvement of our models is especially critical given the increasing sophistication of fraudsters, who tirelessly develop new ways to circumvent existing technology. Rather than playing catch up, as is the case with a purely rules-based approach, our models remain several steps ahead by evolving as new fraudulent practices emerge.
            </p>
            <h2 class="thin">
                Training the machine
            </h2>
            <p class="light">
                When training our machine learning models with sample data we go through a five-step process:
            </p>
            <h3>
                1. Data scraping
            </h3>
            <p class="light">
                When a user verifies their identity with Veridu, they are asked to sign in to one or more of their social or online accounts and to grant us permission to access the data contained within these. We instantly gather this data using APIs. 
            </p>
            <q>
                Veridu puts the user in control of the data they share, providing us with access to data beyond what's available on public profiles.
            </q>
            <p class="light">
                It's important to note that our consent-driven approach means that the information we collect goes much deeper than what appears on a user's public profile. Depending on the accounts a user has verified themselves with we collect information including their posts, comments, activities, playlists, location, and more.
            </p>
            <h3>
                2. Data cleansing
            </h3>
            <p class="light">
                Following the data scraping step we're left with a mass of raw, unstructured data that we need to make sense of. We do this by cleansing the data and structuring it into a standard format, turning the raw data into facts like 'first name', 'last name', 'gender', 'location', and 'age'.  
            </p>
            <p class="light">
                When it comes to machine learning, if you put rubbish in you'll get rubbish out, and this step ensures we never get into that situation. By identifying and marking any missing facts (for example, perhaps none of the accounts used by a user to verify themselves contained a date of birth), we train our models using only the highest quality data.

            </p>
            <h3>
                3. Feature Extraction
            </h3>
            <p class="light">
                This is one of the most critical aspects of a machine learning pipeline. In our scenario, we obtain raw data from a user's social and online accounts, which is made up of a mass of unstructured textual and image data, such as a user's posts, comments, likes, images, tags, and more. 
            </p>
            <q>
                Using online activity including social media posts, images and comments Veridu can instantly verify a user's identity.
            </q>
            <p class="light">
                During this learning step we compute features that serve as structured input to our models. Those features can be composed of numerical, categorical and binary values, and can be described as an individual measurable property of a phenomenon being observed.
            </p>
            <p class="light">
                Let's take the example of a user's name. First, we scrape a user's online accounts, before cleansing and structuring the data into granular facts, such as 'First name on Facebook' and 'First name on Google'. At this point, however, we have no way of knowing if the user is actually a fraudster using fake details to commit their crime.
            </p>
            <p class="light">
                To assess the likelihood that this is actually the user's real name, we train our model using the set of features we have computed. One example of a binary feature is "does the first name on Facebook match the first name on Google?". An example of a numeric-based feature around name is the number of comments a user has received on his posts which mention his name. 
            </p>
            <p class="light">
                These are just simple examples of features. Veridu computes hundreds of other features from the raw data we collect, such as how active a profile is, how information from different sources correlate with each other, and many more. All of those features are then used during our model training step.
            </p>
            <h3>
                4. Model training
            </h3>
            <p class="light">
                This is where things get really interesting. We now build a model to assess our confidence in the user's credibility, based on the known real and fake data samples we have collected. We use a set of learning models to do this, one of the main ones being neural networks.  
            </p>
            <q>
                A neural network is a model inspired by the way our brains work, with a set of connected neurons that fire when a particular input is received. 
            </q>
            <p class="light">
                Neural networks explore this idea by building a set of connected neurons which are trained via a mathematical optimisation technique called gradient descent. By using a set of training data containing known real users and known fake users, we can tell the model when it's right, and when it's wrong, allowing it to continually learn to reduce any output error and become highly accurate. 
            </p>
            <h3>
                5. Model evaluation
            </h3>
            <p class="light">
                The final step is to put our model to the test to ensure it is learning as we expect. We do this using a statistical technique called cross validation.
            </p>
            <p class="light">
                Cross validation is the process of training our model on one subset of data, and then testing it using a different subset. This process is repeated many times using different subsets of data for training and testing. By doing this, we can be sure that our models are smart enough to accurately analyse all new data coming in. If we're happy with the results of the evaluation step, we have our final model.
            </p>
            <h2 class="thin">
                The end result
            </h2>
            <p class="light">
                When a user verifies with Veridu, we use our trained models to calculate a credibility probability, which is then turned into a binary decision - "is this profile fake or real"? 
            </p>
        </div>

        <div class="col-xs-12 col-sm-4 col-lg-4 box box-text wow animate fadeIn">
            <div class="tl-line">
            </div>
            <h2 class="visible-lg center thin">How it works</h2>
            <h2 class="hidden-lg center thin">How it works</h2>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-lg-12 center story-howitworks divider">
                    <img class="center solutions-item" src="./svg/whatwedo/1.svg">
                    <br>
                    <h3 class="center visible-xs visible-sm visible-md visible-lg">
                        1. Data gathering
                    </h3>
                    <p class="light">
                        A user signs into their social or online accounts. We get raw data.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 center story-howitworks divider">
                    <img class="center solutions-item" src="./svg/whatwedo/2.svg">
                    <br>
                    <h3 class="center visible-xs visible-sm visible-md visible-lg">
                        2. Data cleansing
                    </h3>
                    <p class="light">
                        We then turn the raw data into facts like 'first name', 'last name', 'gender', 'location', and 'age'
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 center story-howitworks divider">
                    <img class="center solutions-item" src="./svg/whatwedo/3.svg">
                    <br>
                    <h3 class="center visible-xs visible-sm visible-md visible-lg">
                        3. Feature extraction
                    </h3>
                    <p class="light">
                        Then we compute features that serve as structured input to our machine learning models.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 center story-howitworks divider">
                    <img class="center solutions-item" src="./svg/whatwedo/4.svg">
                    <br>
                    <h3 class="center visible-xs visible-sm visible-md visible-lg">
                        4. Model training
                    </h3>
                    <p class="light">
                        We use learning models to assess our confidence in the user's credibility compared to other known bad and good actors.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 center story-howitworks divider">
                    <img class="center solutions-item" src="./svg/whatwedo/5.svg">
                    <br>
                    <h3 class="center visible-xs visible-sm visible-md visible-lg">
                        5. Model evaluation
                    </h3>
                    <p class="light">
                        The learning model is put to the test to ensure it is learning as we expect.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 center story-howitworks divider">
                    <img class="center solutions-item" src="./svg/whatwedo/6.svg">
                    <br>
                    <h3 class="center visible-xs visible-sm visible-md visible-lg">
                        6. Confidence score
                    </h3>
                    <p class="light">
                    Based on the calculated credibility probability, you immediately receive a confidence score.
                    </p>
                </div>
            </div>
            <br>
        </div>
    </div>
</div>

<div class="visible-lg hidden-xs container-fluid wow animate fadeIn divider">
    <div class="row">
            <div class="col-xs-12 col-sm-3 col-lg-3 box heading-solutions">
                <h4 class="visible-xs visible-sm visible-md visible-lg white">Services</h4>
                <p class="maxwidth light solutionsh3 white">
                    A closer look at the services we provide                
                </p>
            </div>
        <a href="./onboarding.html">
            <div class="col-xs-12 col-sm-3 col-lg-3 box story-product onboarding-icons onboarding-product">
                    <div class="tl-line onboarding-line">
                    </div>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-lg-5">
                            <img class="solutions-item" src="./svg/onboarding-1.svg">
                        </div>
                        <div class="col-xs-6 col-sm-6 col-lg-7">
                        <h3 class="visible-xs visible-sm visible-md visible-lg darkblue">
                            Verified<br>Onboarding<i class="material-icons icon-position">keyboard_arrow_right</i>
                        </h3>
                        <p class="maxwidth light solutionsh3">
                            Maintain your<br> site's integrity
                        </p>
                        </div>
                    </div>
            </div>
        </a>
        <a href="./transactions.html">
            <div class="col-xs-12 col-sm-3 col-lg-3 box story-product transactions-icons transaction-product">
                <div class="tl-line transaction-line">
                </div>
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-lg-5">
                        <img class="solutions-item" src="./svg/creditcard-1.svg">
                    </div>
                    <div class="col-xs-6 col-sm-6 col-lg-7">
                        <h3 class="visible-xs visible-sm visible-md visible-lg darkblue">
                            Verified<br>Transactions<i class="material-icons icon-position">keyboard_arrow_right</i>
                        </h3>
                        <p class="maxwidth light solutionsh3">
                            Accept more<br> good customers
                        </p>
                    </div>
                </div>
            </div>
        </a>
        <a href="./activity.html">              
            <div class="col-xs-12 col-sm-3 col-lg-3 box story-product activity-icons activity-product">
                <div class="tl-line activity-line">
                </div>
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-lg-5">
                        <img class="solutions-item activity" src="./svg/activity-1.svg">
                    </div>
                    <div class="col-xs-6 col-sm-6 col-lg-7">
                        <h3 class="visible-xs visible-sm visible-md visible-lg darkblue">
                            Verified<br> Internet Life<i class="material-icons icon-position">keyboard_arrow_right</i>
                        </h3>
                        <p class="maxwidth light solutionsh3">
                            Proof of<br>online activity         
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
<div class="hidden-lg visible-xs visible-sm visible-md container-fluid wow animate fadeIn divider">
    <div class="row">
            <div class="col-xs-6 col-sm-3 col-lg-3 box heading-solutions-md">
                <h4 class="visible-xs visible-sm visible-md visible-lg white">Services</h4>
                <p class="maxwidth light solutionsh3 white">
                    A closer look at the services we provide                
                </p>
            </div>
        <a href="./onboarding.html">
            <div class="col-xs-6 col-sm-3 col-lg-3  box story-product-md onboarding-icons onboarding-product">
                    <div class="tl-line onboarding-line">
                    </div>
                    <img class="solutions-item" src="./svg/onboarding-1.svg">
                    <h3 class="visible-xs visible-sm visible-md visible-lg darkblue solutionsh3">
                        Verified Onboarding
                    </h3>
                    <p class="maxwidth light solutionsh3">
                        Maintain your<br> site's integrity
                    </p>
            </div>
        </a>
        <a href="./transactions.html">
            <div class="col-xs-6 col-sm-3 col-lg-3 box story-product-md transactions-icons transaction-product">
                <div class="tl-line transaction-line">
                </div>
                <img class="solutions-item" src="./svg/creditcard-1.svg">
                <h3 class="visible-xs visible-sm visible-md visible-lg darkblue solutionsh3">
                    Verified Transactions
                </h3>
                <p class="maxwidth light solutionsh3">
                    Accept more<br>good customers
                </p>
            </div>
        </a>
        <a href="./activity.html">              
            <div class="col-xs-6 col-sm-3 col-lg-3  box story-product-md activity-icons activity-product">
                <div class="tl-line activity-line">
                </div>
                <img class="solutions-item activity" src="./svg/activity-1.svg">
                <h3 class="visible-xs visible-sm visible-md visible-lg darkblue solutionsh3">
                    Verified<br> Internet Life
                </h3>
                <p class="maxwidth light solutionsh3">
                    Proof of<br>online activity             
                </p>
            </div>
        </a>
    </div>
</div>
