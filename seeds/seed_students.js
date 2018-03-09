exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_info_table').del().then(function() {
    // Inserts seed entries
    return knex('student_info_table').insert([
      {
        id: 1,
        headshot: 'https://i.imgur.com/gzuG5IP.jpg',
        full_name: 'Davia DeNisco',
        github: 'https://github.com/daviadenisco',
        linkedin: 'https://www.linkedin.com/in/davia-denisco-2889317',
        email: 'mailto:davia@daviadenisco.com',
        professional_site: 'http://www.daviadenisco.com/',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 2,
        headshot: 'https://i.imgur.com/wya2YOA.jpg',
        full_name: 'David Nyman',
        github: 'https://github.com/davidnymanmusic',
        linkedin: 'https://www.linkedin.com/in/david-nyman-a65a8a17/',
        email: 'mailto:davenyman@gmail.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 3,
        headshot: 'https://i.imgur.com/Biu7y7z.png',
        full_name: 'Don Tamayo',
        github: 'https://github.com/webbydon29',
        linkedin: 'https://www.linkedin.com/in/don-tamayo-2b0204132/',
        email: 'mailto:amazingmardon@gmail.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 4,
        headshot: 'https://i.imgur.com/yecnx3Z.jpg',
        full_name: 'Gonpo Lama',
        github: 'https://github.com/gonpolama',
        linkedin: 'https://www.linkedin.com/in/gonpo-lama-68b0a840/',
        email: 'mailto:gonpolama@gmail.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 5,
        headshot: 'https://i.imgur.com/uHu09GK.jpg',
        full_name: 'Jon Aquarone',
        github: 'https://github.com/Jontronics',
        linkedin: 'https://www.linkedin.com/in/jonathan-aquarone-73085189/',
        email: 'mailto:j.aquarone@gmail.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 6,
        headshot: 'https://i.imgur.com/lC1D5iQ.jpg',
        full_name: 'Kyle Treman',
        github: 'https://github.com/jkyletreman',
        linkedin: 'https://www.linkedin.com/in/jkyletreman/',
        email: 'mailto:jkt290@nyu.edu',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 7,
        headshot: 'https://i.imgur.com/U5PYID3.jpg',
        full_name: 'Mike Allen',
        github: 'https://github.com/mikevocalz',
        linkedin: 'https://www.linkedin.com/in/michael-allen-3b538429/',
        email: 'mailto:mikevocalz@aol.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 8,
        headshot: 'https://i.imgur.com/qLEciTm.jpg',
        full_name: 'Mona Temchin',
        github: 'https://github.com/MonaTem',
        linkedin: 'https://www.linkedin.com/in/monatemchin/',
        email: 'mailto:monatemchin@gmail.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }, {
        id: 9,
        headshot: 'https://i.imgur.com/4lYyS6B.jpg',
        full_name: 'Riley Green',
        github: 'https://github.com/rgreenviiiv',
        linkedin: 'https://www.linkedin.com/in/riley-green-aaaa2463/',
        email: 'mailto:rileygreenviiiv@gmail.com',
        professional_site: '',
        capstone_link: '',
        capstone_desc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app."
      }
    ]);
  });
};
