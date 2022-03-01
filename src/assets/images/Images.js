// Don't Change Anything Region START ---------------------

function makeGDriveLinkUsable(s)
{
    var new_link = s.slice(0, 25);
    new_link += "uc?export=view&id=";
    
    for(var i = 32; i < s.length; i++)
    {
        if (s[i] === '/')
            break;
        new_link += s[i];
    }

    return new_link;
}

// ------------------------- Don't Change Anything Region ENDS


// Paste drive Link and add it in the ProjectImg List
// End name with a comma (Place links within quotes)
// First 4 names will be displayed
const ProjectImg = [
    {
        src: 'https://drive.google.com/file/d/1ven0z8524cKmY3cnJLQyjhXuTVCsYD2o/view?usp=sharing', 
        id: "webapp"
    },
    
    {
        src: 'https://drive.google.com/file/d/1DsND2x20HvDsdY7Ve4PTfyGT-XSYhlPD/view?usp=sharing', 
        id: "stock"
    },
];


// Don't Change Anything Region STARTS ---------------

for(var i = 0; i < ProjectImg.length; i++)
    ProjectImg[i].src = makeGDriveLinkUsable(ProjectImg[i].src);

export default ProjectImg;

// ------------------ Don't Change Anything Region ENDS