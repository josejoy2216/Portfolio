
// Add click event listeners to the navigation links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
        }
    });
});


//redirect to contact us 
document.getElementById("Hireme").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


//download resume
document.getElementById('Resume').addEventListener('click', function() {
    // Specify the direct download link to your resume PDF file
    var resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1Kt3kwFj4HuaXFaLaU-bCYh7YL5bOP-A8';
    
    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = resumeDownloadLink;
    link.download = 'JoseChacko.pdf'; // Specify the desired file name for download
    document.body.appendChild(link);
    
    // Trigger the click event of the anchor element
    link.click();
    
    // Clean up
    document.body.removeChild(link);
});

//redirect to contact us 
document.getElementById("showprojects").addEventListener("click", function() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
});









