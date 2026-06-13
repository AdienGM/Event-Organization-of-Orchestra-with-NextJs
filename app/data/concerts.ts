export interface ProgrammeItem {
  work: string;
  mins: string;
}

export interface Artist {
  name: string;
  role: string;
}

export interface Concert {
  id: string;
  series: string;
  status: "On sale" | "Few seats" | "Sold out";
  date: string;
  dateShort: string;
  title: string;
  performer: string;
  venue: string;
  price: string;
  blurb: string;
  programme: ProgrammeItem[];
  artists: Artist[];
}

export const concerts: Concert[] = [
  {
    id: "mahler5",
    series: "2026 Season",
    status: "Few seats",
    date: "Sat 19 Sep · 7:30pm",
    dateShort: "19 Sep",
    title: "Mahler: Symphony No. 5",
    performer: "cond. Adriana Vázquez",
    venue: "Grand Hall",
    price: "From £24",
    blurb:
      "The season opens in full romantic splendour. Adriana Vázquez leads the orchestra through Mahler's Fifth — from its funeral march to the radiant Adagietto and a blazing rondo-finale.",
    programme: [
      { work: "Wagner — Prelude to Lohengrin", mins: "9′" },
      { work: "Berg — Violin Concerto", mins: "26′" },
      { work: "Mahler — Symphony No. 5 in C-sharp minor", mins: "72′" },
    ],
    artists: [
      { name: "Adriana Vázquez", role: "Conductor" },
      { name: "Isabelle Faust", role: "Violin" },
    ],
  },
  {
    id: "grimaud",
    series: "Recital",
    status: "On sale",
    date: "Fri 02 Oct · 8:00pm",
    dateShort: "02 Oct",
    title: "Grimaud plays Brahms",
    performer: "Hélène Grimaud, piano",
    venue: "Salle Cortot",
    price: "From £32",
    blurb:
      "An intimate evening with one of the great pianists of our time. Hélène Grimaud returns with a programme of Brahms intermezzi and the towering First Sonata.",
    programme: [
      { work: "Brahms — Three Intermezzi, Op. 117", mins: "16′" },
      { work: "Brahms — Piano Sonata No. 1 in C", mins: "32′" },
      { work: "Schumann — Kreisleriana", mins: "33′" },
    ],
    artists: [{ name: "Hélène Grimaud", role: "Piano" }],
  },
  {
    id: "trout",
    series: "Chamber",
    status: "Sold out",
    date: "Sun 11 Oct · 3:00pm",
    dateShort: "11 Oct",
    title: "Schubert: The Trout",
    performer: "Aurora Quartet & friends",
    venue: "Conservatory",
    price: "From £18",
    blurb:
      "A Sunday matinée of chamber warmth. The Aurora Quartet is joined by double bass and piano for Schubert's beloved 'Trout' Quintet.",
    programme: [
      { work: "Haydn — String Quartet Op. 76 No. 3", mins: "25′" },
      { work: "Schubert — Piano Quintet 'The Trout'", mins: "38′" },
    ],
    artists: [{ name: "Aurora Quartet", role: "Ensemble" }],
  },
  {
    id: "messiah",
    series: "Choral",
    status: "On sale",
    date: "Sat 12 Dec · 7:00pm",
    dateShort: "12 Dec",
    title: "Handel: Messiah",
    performer: "Philharmonia Chorus",
    venue: "Grand Hall",
    price: "From £28",
    blurb:
      "The season's choral centrepiece. Period forces and the full Philharmonia Chorus bring Handel's Messiah to the Grand Hall in time for the winter.",
    programme: [{ work: "Handel — Messiah, HWV 56", mins: "140′" }],
    artists: [
      { name: "Ruth Kerr", role: "Soprano" },
      { name: "Philharmonia Chorus", role: "Chorus" },
    ],
  },
  {
    id: "beethoven9",
    series: "2026 Season",
    status: "Few seats",
    date: "Fri 23 Jan · 7:30pm",
    dateShort: "23 Jan",
    title: "Beethoven: Symphony No. 9",
    performer: "cond. Adriana Vázquez",
    venue: "Grand Hall",
    price: "From £30",
    blurb:
      "The 'Choral' Symphony, with four soloists and full chorus, brings the new year in on a note of universal joy.",
    programme: [
      { work: "Webern — Passacaglia, Op. 1", mins: "11′" },
      { work: "Beethoven — Symphony No. 9 'Choral'", mins: "68′" },
    ],
    artists: [{ name: "Adriana Vázquez", role: "Conductor" }],
  },
  {
    id: "rite",
    series: "2026 Season",
    status: "On sale",
    date: "Sat 28 Feb · 7:30pm",
    dateShort: "28 Feb",
    title: "Stravinsky: The Rite of Spring",
    performer: "cond. Marco Lindqvist",
    venue: "Grand Hall",
    price: "From £26",
    blurb:
      "A century on, the score that started a riot still astonishes. Paired with Debussy's shimmering Prélude and Ravel's orchestral fireworks.",
    programme: [
      { work: "Debussy — Prélude à l'après-midi", mins: "10′" },
      { work: "Ravel — La Valse", mins: "13′" },
      { work: "Stravinsky — The Rite of Spring", mins: "35′" },
    ],
    artists: [{ name: "Marco Lindqvist", role: "Conductor" }],
  },
];
