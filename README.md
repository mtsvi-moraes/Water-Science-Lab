[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue.svg)](https://developer.ibm.com/callforcode/solutions/projects/get-started/)

# Water Science Lab - NASA's Space for Change

Bringing Artificial Intelligence to monitor water quality and save lives.

To learn more about our project and check the water quality, please visit: https://pure-74236.web.app/home

To check our Space Apps' profile: https://2021.spaceappschallenge.org/challenges/statements/space-for-change/teams/water-science-lab/project

You can also check our presentation on YouTube by clicking on the image below:

[![capa_pure](/images/capa_pure2.jpeg)](https://www.youtube.com/watch?v=7esA616AtBg)


## Description:

<p>Over 1.8 billion people on Earth do not have access to adequate sanitation. Therefore, over 10 million people, with the majority being children, die every year due to the lack of safe drinking water. This is a major problem plaguing humanity, targeting the poorest populations, whose only source of drinking water are rivers that can become polluted unbeknownst to the people who rely on them.

Today, while scientific advancements are made daily, analyzing water quality is not a simple task. Researchers must travel to the region and collect individual samples. After which, the samples must then be  transported to a qualified laboratory where testing can be performed. Each of these crucial steps increase the time and monetary value spent on the expedition making it more difficult to receive funding and consequently alert the population.
Taking all of this into account, we developed SpecWater, a solution that aims to facilitate this process and improve access to safer water sources in all regions and in real time, for all humanity.

Pure uses Artificial Intelligence that analyzes the spectrum of light within a water sample collected by an IoT (a small equipment installed in rivers and lakes). After the analysis, results will be made available on an easily accessible website. Expanded functions such as the ability to trigger an alert via SMS, will also be available. When a water quality alert is sent, it will allow the population to be able to check the quality of the community source and view whether it has been contaminated, or if it???s safe to consume. Instructions regarding a separate source of drinking water will be provided if the community source tests confirm contamination thus, avoiding infant mortality, the human immunodeficiency virus, which is often found in contaminated water and several other serious health and nutrition problems. The responsible authorities will also be immediately alerted to take action and provide further assistance to the local population.</p>


### What is the problem?

According to a recent report made by the United Nations Children???s Emergency Fund (UNICEF) and the World Health Organization (WHO), one in three people worldwide does not have access to safe water. 
In many countries, taps, wells and pipes which are the only option for drinking water are contaminated unbeknownst by the population, putting the health of the ones who drink it at risk and making many sick.

### Our current scenario:

Every person needs a sustainable supply of clean water: for drinking, washing, cooking and cleaning. It is a basic human right and there are still millions of people who do not have clean water.

To date, governments, institutions and service providers around the world have not done enough to ensure that clean water reaches the poorest and most marginalized people.

Although COVID-19 highlights the importance of hand hygiene in preventing the spread of disease, billions of people around the world, including hundreds of millions of school-age children, do not have access to soapy washbasins. People living in rural areas, urban slums, disaster prone areas and low-income countries are the most vulnerable and the most affected. In addition, children who do not have clean water have not only their health affected, but also their nutrition, education and learning skills, impacting many aspects of their lives.

Given this, we have the sad realization that millions of people suffer annually, without water, sanitation and hygiene services.

### The goal:

Once the Desk Research step is completed, we realize that the starting point is to create a solution that aims to facilitate the process of water analysis and make the quality in your region available to all humanity in real time, so that everyone can access the site whenever you want, alerts will also be issued when the water that supplies your region is contaminated, as well as instructions for another form of drinking water consumption, and allowing safe information to be shared.

In addition, the system will issue an alert for responsible authorities to take appropriate action.

## Contents

1. [Description](#Description)
2. [Architecture](#Architecture)
5. [Development](#Development)
6. [Resources and External Links](#Resources-and-External-links)
7. [About us](#About-us)
8. [License](#license)


## Architecture

1. Initial phase: Water collection through IoT where it can be placed in several rivers
1. Data transmission through MQTT protocol to Watson IoT platform;
1. The data management proccess for analysis and orquestration of steps;
1. Sent to Watson Studio where the data is treated and sent to Watson ML Engine;
1. The machine learning model is implemented and it is responsible to classify the quality of water;
1. After the data is classified, it is sent to a database;
1. The API consumes the data and makes it available for comsumption;
1. The website gathers the information and puts it on a map;
1. The local population can access the website and check the quality of the consumed water in real time

![Cooperation architecture](/images/architecture_01.jpg)


## Development

### Spectrophotometry research:
It is a method used to measure how much a chemical substance absorbs light by measuring the intensity of when a beam of light passes through a sample, making it possible to measure the quantity of a known chemical substance

![spectrophotometer](/images/spectrophotometer.jpg)

### Arduino prototype:
We developed a spectrophotometry prototype in Arduino capable of analyzing water samples, which when in the future installed in rivers, streams, wells, springs and treatment plants will collect the water data and process them through cloud.

![Cooperation architecture diagram](/images/arduino_project.jpg)

### Collection in the river:
The Tiet?? river, born in Sales??polis, in the Serra do Mar, crosses the state of S??o Paulo, bathing 62 municipalities. The river is at the top of the ranking of the most polluted rivers in Brazil, as it receives domestic and industrial sewage in the stretch of the capital where less than half of this sewage is treated. The analyzed sample was collected in the western region of the city, after the river had crossed the entire state capital on the border with the municipality of Osasco.

![coleta](/gifs/coleta.gif)

### Creation of an Arduino collector for spectrophotometry testing:
Taken from the point where the water runs calmly with a strong sewage odor using a plastic container and transferred to the test body applying the method of analysis according to the variation of the light beam through the substance without decanting of organic material.

![arduino](/gifs/arduino.gif)

### Data analysis
For this project, two samples were collected for analysis, one from safe water and the other from the most polluted river in Brazil, the Tiet?? river, located in the capital of S??o Paulo. Thus, we carried out a comparison between different samples and proved the efficiency of the chosen method, proving that the project is functionally applicable:

![data](/images/data_collects.jpg)

### Model algorithms, Auto AI 
We used a cognitive system applied in Watson Studio together with Watson ML to test different algorithms and compare the efficiency of the models, streamlining the analysis process between the collected samples, and in the future analyzing any changes or anomalies that will be immediately noticed in the rivers.:

![AutoAI](/gifs/IBM_Watson_IA.gif)

### Web site 
The Pure website is available for desktops and mobile devices. It is possible to search the water quality by filtering the country or province where the user is located, as well as view the map where the IoT device was installed and the water sample was collected, and through a check mark, view the quality of the water and in the future receive instructions on how to treat it for consumption, until the responsible authorities take further actions.

You can check more details at: https://pure-74236.web.app/home

![website](/gifs/website_pure.gif)


#### Consequently creating a complete monitoring system through which we can observe changes in the physical, chemical and biological characteristics of the observed water


## Resources and External links:

* [ARSET - Integrating Remote Sensing into a Water Quality Monitoring Program](https://appliedsciences.nasa.gov/join-mission/training/english/arset-integrating-remote-sensing-water-quality-monitoring-program)
* [European Space Agency Sentinel-2 L1 images Collection](https://discovery.creodias.eu/dataset/sentinel-2-l1-collection)
* [European Space Agency - Sentinel Data Access Overview](https://sentinel.esa.int/web/sentinel/sentinel-data-access)
* [IBM Cloud](https://www.ibm.com/cloud)
* [NASA's Water Quality Data Pathfinder](https://earthdata.nasa.gov/learn/pathfinders/water-quality-data-pathfinder)
* [NASA's LAADS (Level-1 and Atmosphere Archive & Distribution System)](https://ladsweb.modaps.eosdis.nasa.gov/search/order/4/CLDPROP_L2_MODIS_Aqua--5111/2021-09-17..2021-10-01/DB/Site:300,376)
* [Pioneering Tool to Monitor Water Quality](https://landsat.gsfc.nasa.gov/article/unesco-launches-pioneering-tool-monitor-water-quality)
* [Sentinel 2 info](https://sentinel.esa.int/web/sentinel/missions/sentinel-2)
* [Sentinel 2 satellite imagery Article](https://medium.com/eelab/how-to-rank-the-most-polluted-water-body-in-city-using-sentinel-2-satellite-imagery-via-google-792685105bfd)
* [Sentinel 2 Technical Guide](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi)
* [UNICEF article regarding unsafe water comsumption](https://www.unicef.org/wash/water)
* [Watson IoT Cloud](https://www.ibm.com/cloud/internet-of-things)
* [Watson Machine Learning](https://www.ibm.com/br-pt/cloud/machine-learning)
* [Watson Studio](https://www.ibm.com/cloud/watson-studio)
* [World Health Organization and UNICEF article regarding safe water comsumption](https://www.who.int/news/item/18-06-2019-1-in-3-people-globally-do-not-have-access-to-safe-drinking-water-unicef-who) 



## About us
* [Eduardo Ritter](https://github.com/EduardoMoraesRitter), Senior Software Engineer
* [Joana Ritter](https://github.com/JoanaRitter), UX/UI Designer
* [Joel Pacheco](https://github.com/jpachecoaraujo), Chemist
* [Matheus Moraes](https://github.com/mtsvi-moraes), Data Scientist
* [Pedro Ivo](https://github.com/P-dro), IT Specialist
* [Pricila Sales](https://github.com/pricilanogueira), UX/UI Designer


## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.
