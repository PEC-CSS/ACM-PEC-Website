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
    'https://drive.google.com/file/d/135jImRhC8MJz-A2UiP_Kj7yjeTjU2Rba/view?usp=sharing',
    'https://drive.google.com/file/d/1DKDKMaLfrMFLyRolcnHMu3A8RSJoLm84/view?usp=sharing',
    'https://drive.google.com/file/d/1SJ2NJ8NVspmSCV70vxmPRz83W3LAqyEu/view?usp=sharing',
    'https://drive.google.com/file/d/1Rhd4nX2gKiI4Ou1j_EtqiTVe67IyG09f/view?usp=sharing',
];


// Don't Change Anything Region STARTS ---------------

for(var i = 0; i < ProjectImg.length; i++)
    ProjectImg[i] = makeGDriveLinkUsable(ProjectImg[i]);

export default ProjectImg;

// ------------------ Don't Change Anything Region ENDS