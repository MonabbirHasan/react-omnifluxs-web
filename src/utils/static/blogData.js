const currentDate = new Date();

const day = currentDate.getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();
const formattedDate = `${day} ${month} ${year}`;

import blog1 from "../../assets/img/blog1.png";
import blog2 from "../../assets/img/blog2.png";
import blog3 from "../../assets/img/blog3.png";
export const blogData = [
    {
        "id": "1",
        "publish_date": formattedDate,
        "category": "Global Leaders",
        "title": "Global Leaders Convene Virtually to Address Climate Crisis and Green Initiatives",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": blog1,
        "author":"1",
    },
    {
        "id": "2",
        "publish_date": formattedDate,
        "category": "Medical Research",
        "title": "Breakthrough Medical Research Offers Hope for Alzheimer's Disease Treatment",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": blog2,
        "author":"1",
    },
    {
        "id": "3",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": blog3,
        "author":"1",
    },
    {
        "id": "4",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": blog3,
        "author":"1",
    },
    {
        "id": "5",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?cs=srgb&dl=pexels-pixabay-139398.jpg&fm=jpg",
        "author":"1",
    },
    {
        "id": "6",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://img.freepik.com/free-photo/medical-stethoscope-with-paper-cut-family_23-2148488217.jpg",
        "author":"1",
    },
    {
        "id": "7",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://media.istockphoto.com/id/1127069581/photo/medical-technology-concept.jpg?s=612x612&w=0&k=20&c=qp_smilHlWhGzZ-NcftDLugFs_EVCLfX2Z7WCAD1v6A=",
        "author":"1",
    },
    {
        "id": "8",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://etimg.etb2bimg.com/photo/96867592.cms",
        "author":"1",
    },
    {
        "id": "9",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://i0.wp.com/thepulse.org.au/wp-content/uploads/2018/02/Networked-clinical-care-photo-800x445.jpg?resize=800%2C445",
        "author":"1",
    },
    {
        "id": "10",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://999developments.com/wp-content/uploads/2022/08/1-1080x675.jpg",
        "author":"1",
    },
    {
        "id": "11",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://images.inc.com/uploaded_files/image/1920x1080/getty_962094932_385032.jpg",
        "author":"1",
    },
    {
        "id": "12",
        "publish_date": formattedDate,
        "category": "SpaceX Launches",
        "title": "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost",
        "description": "Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Expedita Natus Praesentium Eius Consequatur Magni Quibusdam Aut Temporibus Quas Facere! Voluptatum Exercitationem Enim Similique. Repellendus Repellat Exercitationem Quia Amet Dolorum.",
        "thumbnail": "https://s.hdnux.com/photos/01/25/36/43/22407362/5/1200x0.jpg",
        "author":"1",
    },
];



// "Global Leaders Convene Virtually to Address Climate Crisis and Green Initiatives"
// "Breakthrough Medical Research Offers Hope for Alzheimer's Disease Treatment"
// "SpaceX Successfully Launches Manned Mission to Establish Lunar Research Outpost"
// "Tech Giants Collaborate to Develop New Standards for Data Privacy"
// "Economic Experts Predict Shift in Global Markets Following Major Trade Agreements"
// "New Variant of Concern Discovered, Governments Assessing Public Health Risks"
// "Artificial Intelligence Surpasses Human Performance in Complex Scientific Discovery"
// "Historic Archeological Find Sheds Light on Ancient Civilization's Advanced Engineering"
// "Renewable Energy Sector Sees Unprecedented Growth, Creating Jobs Worldwide"
// "Entertainment Industry Adapts to Virtual Reality Experiences, Transforming Audience Engagement"