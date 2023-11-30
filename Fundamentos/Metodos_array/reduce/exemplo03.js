const musics = [
	{ title: 'Eu nunca amei assim', duration: 4 },
	{ title: 'Você sempre será', duration: 3 },
	{ title: 'Chora me liga', duration: 6 },
	{ title: 'Tô nem aí', duration: 3 },
	{ title: 'Nem olha pro lado', duration: 4 },
	{ title: 'Evidências', duration: 3 },
	{ title: 'Borbulhas de amor', duration: 4 },
	{ title: 'Como vai você', duration: 4 },
	{ title: 'Fim de tarde', duration: 5 },
	{ title: 'Ciumenta', duration: 3 },
];

const musicInfo = musics.reduce(
	(acc, music) => {
		acc.totalDuration += music.duration;

    if (!acc.longestDuration || music.duration > acc.longestDuration.duration) {
      acc.longestDuration = music;
    }

    return acc
	},
	{ totalDuration: 0 }
);

console.log(musicInfo);
