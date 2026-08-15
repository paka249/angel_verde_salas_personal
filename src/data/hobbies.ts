export interface HobbyImage {
  src: string
  alt: string
}

export const hobbyImages: HobbyImage[] = [
  { src: '/hobbies/placeholder-1.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-2.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-3.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-4.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-5.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-6.svg', alt: 'Replace with your own photo' },
]

export interface HobbySection {
  id: string
  heading: string
  paragraph: string
}

export const hobbySections: HobbySection[] = [
  {
    id: 'hobby-one',
    heading: 'Art',
    paragraph: 'I have always enjoyed drawing. I\'m inspired by anime-style art and like to draw anime characters. ' +
    'I recently been practicing my painting skills as well. I prefer digital art. because of the portability and conveniance.'+
     'I occasionally do traditional art as well, I just havent had the time to prepare the materials, so I draw and paint on my tablet a lot more.' +
     'I want to start uploading my art here at least.',
  },
  {
    id: 'hobby-two',
    heading: 'Soccer',
    paragraph: 'I love soccer and am looking for a team to play with regularly (around the san marcos, austin area).'+
    ' I used to play a lot of soccer when i was younger but because of college I stopped playing.' +' It wasnt until recently where I started practicing regularly.'
    +'Now Im looking for a team and doing intramural sports as well.' +' I normally play midfield.' +' I of course support Mexico and FC Barcelona.' 
  },
  {
    id: 'hobby-three',
    heading: 'Traveling',
    paragraph: 'I love traveling and exploring new places, maybe not so new places but I love going to Mexico! '+
    'I go to mexico every year and plan to go now very 2 years. I mainly visit my family in Mexico and enjoy delicious food over there.'+
    'The states I have have visted are Chiapas, Mexico City, Veracruz and Puebla. '+ ' Theyre all very interesting and fun places with delicious food and great people.'
    +' Im planning on going again in December to Veracruz.'
  },
]
