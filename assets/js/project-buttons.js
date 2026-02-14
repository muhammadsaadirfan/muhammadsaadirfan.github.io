// Add project action buttons to all project sections
function addProjectButtons() {
   const projectSections = document.querySelectorAll('.project-content-area');

   projectSections.forEach(section => {
      // Check if buttons already exist
      if (section.querySelector('.project-actions')) return;

      // Find the project tags list
      const tagsList = section.querySelector('.project_tags');
      if (!tagsList) return;

      // Create buttons container
      const buttonsContainer = document.createElement('div');
      buttonsContainer.className = 'project-actions';
      buttonsContainer.style.marginTop = '20px';
      buttonsContainer.style.display = 'flex';
      buttonsContainer.style.gap = '10px';
      buttonsContainer.style.flexWrap = 'wrap';

      // Create GitHub button
      const githubBtn = document.createElement('a');
      githubBtn.href = '#';
      githubBtn.className = 'project-action-btn github';
      githubBtn.style.padding = '8px 16px';
      githubBtn.style.backgroundColor = '#333';
      githubBtn.style.color = 'white';
      githubBtn.style.borderRadius = '5px';
      githubBtn.style.textDecoration = 'none';
      githubBtn.style.fontSize = '14px';
      githubBtn.style.transition = 'all 0.3s ease';
      githubBtn.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';

      // Create Demo button
      const demoBtn = document.createElement('a');
      demoBtn.href = '#';
      demoBtn.className = 'project-action-btn demo';
      demoBtn.style.padding = '8px 16px';
      demoBtn.style.backgroundColor = '#4CAF50';
      demoBtn.style.color = 'white';
      demoBtn.style.borderRadius = '5px';
      demoBtn.style.textDecoration = 'none';
      demoBtn.style.fontSize = '14px';
      demoBtn.style.transition = 'all 0.3s ease';
      demoBtn.innerHTML = '<i class="fa-solid fa-play"></i> Demo';

      // Create Media button
      const mediaBtn = document.createElement('a');
      mediaBtn.href = '#';
      mediaBtn.className = 'project-action-btn media';
      mediaBtn.style.padding = '8px 16px';
      mediaBtn.style.backgroundColor = '#9C27B0';
      mediaBtn.style.color = 'white';
      mediaBtn.style.borderRadius = '5px';
      mediaBtn.style.textDecoration = 'none';
      mediaBtn.style.fontSize = '14px';
      mediaBtn.style.transition = 'all 0.3s ease';
      mediaBtn.innerHTML = '<i class="fa-solid fa-video"></i> Media';

      // Add buttons to container
      buttonsContainer.appendChild(githubBtn);
      buttonsContainer.appendChild(demoBtn);
      buttonsContainer.appendChild(mediaBtn);

      // Insert buttons after tags list
      tagsList.parentNode.insertBefore(buttonsContainer, tagsList.nextSibling);
   });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', addProjectButtons);
window.addEventListener('load', addProjectButtons);
