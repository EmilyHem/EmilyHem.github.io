var formattedName = HTMLheaderName.replace("%data%", "Emily Hem");
var formattedRole = HTMLheaderRole.replace("%data%", "1B Computer Engineering");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
	"name": "Emily Hem",
	"contacts": { 
		"mobile" : "519-498-7150",
		"email": "eshem@edu.uwaterloo.ca",
		"github": "EmilyHem",
		"location": "Kitchener, ON"
	},
	"welcomemessage": "Welcome to my site!",
}

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);

var projects = {
	"projects": [
	{
		"title": "Hult Prize @ Waterloo Semi-Finalist – Save the Day 'Disaster League'", 
		"link": "",
		"dates": "Nov. 2017",
		"description": "Pitched the business model of a VR game for natural disaster preparation to a panel of judges",
	},
	{
		"title": "Search Engine",
		"link": "https://github.com/EmilyHem/Search-Engine",
		"dates": "Dec. 2017-Jan. 2018",
		"description": "Coded a program in Python to crawl the web and output URLs for keyword inputs",
	}]
}

for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title) 
	var formattedLink = formattedTitle.replace("#", projects.projects[project].link);
	$(".project-entry:last").append(formattedLink);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
}

var volunteers = {
	"volunteers": [
	{
		"employer": "Heart and Stroke Foundation",
		"title": "Confirmation Supervisor", 
		"dates": "Oct. 2017-Present",
		"location": "Kitchener, ON",
		"description": "•    Communicate with canvassers in a clear and professional manner to verify that their correct personal information was recorded" + "<br>" +
"•    Coach telerecruiters by suggesting different techniques to better promote canvassing" + "<br>" +    
"•	Exhibit initiative for administrative tasks such as handing out paystubs and making announcements",

	},
	{
		"employer": "University of Waterloo",
		"title": "Engineering Ambassador",
		"dates": "Sept. 2017-Dec. 2018",
		"location": "Waterloo, ON",
		"description": "•	Answered questions and shared personal experiences at the Fall Open House to encourage visitors to apply to the Engineering program" + "<br>" +
"•	Guided and mentored high school students interested in seeing a typical day in university to build connections between the university and future students"
	},
	{
		"employer": "Thrift Centre",
		"title": "Retail Floor Worker",
		"dates": "Oct. 2014-Nov. 2016",
		"location": "New Hamburg, ON",
		"description": "•	Efficiently stocked and organized items on shelves"
	},
	{
		"employer": "KPL",
		"title": "Summer Volunteer",
		"dates": "Jul. 2013-Aug. 2013",
		"location": "Kitchener, ON",
		"description": "•	Helped out in different programs such as the Summer Reading Club desk and Read Aloud Partners"
	}]
}

for (volunteer in volunteers.volunteers) {
	$("#volunteerExperience").append(HTMLvolunteerStart);
	var formattedEmployer = HTMLvolunteerEmployer.replace("%data%", volunteers.volunteers[volunteer].title);
	var formattedTitle = HTMLvolunteerTitle.replace("%data%", volunteers.volunteers[volunteer].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".volunteer-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLvolunteerDates.replace("%data%", volunteers.volunteers[volunteer].dates);
	$(".volunteer-entry:last").append(formattedDates);
	var formattedDescription = HTMLvolunteerDescription.replace("%data%", volunteers.volunteers[volunteer].description);
	$(".volunteer-entry:last").append(formattedDescription);
}

var work = {
	"jobs": [
	{
	"employer": "Shoppers Drug Mart",
	"title": "Cashier",
	"dates": "Nov. 2015 - June 2017",	
	"location": "Kitchener, ON",
	"description": "•    Counted cash at the end of each shift with attention to detail to correct misbalances"  +"<br>"+
	"•    Answered questions and concerns with clarity to ensure customer satisfaction" + "<br>"+
	"•    Operated a cash register and lottery machine while adapting to changes in software" +  "<br>"+
	"•    Promoted the Optimum Card Program to customers with clear communication to increase sales" + "<br>"+
	"•    Persevered while short-handed to achieve the store’s most profitable day" + "<br>"+
	"•    Flexible as scheduling conflicts arose" + "<br>"+
	"•   Supported new co-workers in the various requirements of the job"
	}
	]
}	
//var projects = {
//	"projects": [
//		"title": "search engine",
//		"dates"
	//	"description"
	//	"images"
	//	"link"}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}



var education = {
	"schools": [
		{
			"name": "Candidate for Bachelor of Applied Science",
			"description": "Major: Computer Engineering" + "<br>" + "•    Programmed statistical analysis, and manipulated data structures in C++ to complete labs" + "<br>" + "•    Wrote lab reports by utilizing skills in Excel to clearly present data",
			"location": "University of Waterloo",
			"city": "Waterloo, ON",
			"years": "Sept. 2017 - Present; Expected Graduation 2022"
		},
		{
			"name": "International Baccalaureate Diploma, Ontario Secondary School Diploma",
			"description": "•	Built a robot to compete in competitions as a member of the Robotics Club" + "<br>" + "•	Tutored with effective communication to help students understand English, math, and science concepts as a weekly Peer Tutor",
			"location": "Cameron Heights Collegiate Institute",
			"city": "Kitchener, ON",
			"years": "Sept. 2013-June 2017"
		}
	]
}
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedname = HTMLschoolName.replace("%data%", education.schools[school].location);
	var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].name);
	var formattedDescription = HTMLschoolDescription.replace("%data%", education.schools[school].description); 
	var formatteddates = HTMLschoolDates.replace("%data%", education.schools[school].years);
	var formattedcity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	var formattedschool = formattedname + formatteddegree;
	$(".education-entry:last").append(formattedschool);
	$(".education-entry:last").append(formatteddates);
	$(".education-entry:last").append(formattedcity);
	$(".education-entry:last").append(formattedDescription);
}

var awards = {
	"awards": [
		"Oct. 2017 - Subject Proficiency Award - Spanish",
		"June 2017 - Activities Merit Award",
		"Sept. 2017 - President's Scholarship - University of Waterloo"
	]
}

for (award in awards.awards) {
	$("#awards").append(HTMLawardsStart);
	var formattedaward = HTMLawards.replace("%data%", awards.awards[award]);
	$(".award-entry:last").append(formattedaward);
}
//	"onlineCourses": [
//		{
//			"title": ,
//			"school": "Udacity",
//			"dates": 2017,
//			"url": 
//		}
//	]
//}
//		}]


//$("#main").append(work["description"]);
//$("#main").append(education.name);

// $("#mapDiv").append(googleMap);