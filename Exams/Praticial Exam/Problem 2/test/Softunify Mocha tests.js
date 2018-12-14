let expect = require('chai').expect;
let SoftUniFy = require('../app.js');

describe('test softUniFy class', function () {
    let softUniFy;
    beforeEach(() => {
        softUniFy = new SoftUniFy()
    });

    describe('constructor', function () {
        it('should contain allSongs property', function () {
            expect(softUniFy.hasOwnProperty('allSongs')).to.equal(true);
        });
    });

    describe('downloadSong', function () {
        it('should add a new artist,song', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            expect(softUniFy.allSongs.hasOwnProperty('Eminem')).to.equal(true);
            expect(softUniFy.allSongs['Eminem'].hasOwnProperty('songs')).to.equal(true);
            expect(softUniFy.allSongs['Eminem']['songs'].includes('Venom - Knock, Knock let the devil in...'))
        });
        it('should return class', function () {
            expect(softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')).to.equal(softUniFy);
        });
        it('should increase the lenght of allSongs', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softUniFy.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softUniFy.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            expect([...Object.keys(softUniFy.allSongs)].length).to.equal(2);
            expect(softUniFy.allSongs['Eminem']['songs'].length).to.equal(2);
            expect(softUniFy.allSongs['Dub Fx']['songs'].length).to.equal(1);
        });
    });

    describe('playSong', function () {
        it('should return message for no songs', function () {
            expect(softUniFy.playSong('Matchstick')).to.equal(`You have not downloaded a Matchstick song yet. Use SoftUniFy\'s function downloadSong() to change that!`);
        });
        it('should return songs in given format', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softUniFy.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softUniFy.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            expect(softUniFy.playSong('Venom')).to.equal('Eminem:\nVenom - Knock, Knock let the devil in...\n');
            expect(softUniFy.playSong('Phenomenal')).to.equal('Eminem:\nPhenomenal - IM PHENOMENAL...\n');
            expect(softUniFy.playSong('Light Me On Fire')).to.equal('Dub Fx:\nLight Me On Fire - You can call me a liar.. \n');
        });
    });

    describe('songsList', function () {
        it('should return message for no songs', function () {
            expect(softUniFy.songsList).to.equal('Your song list is empty');
        });
        it('should return formateed message for current songs', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softUniFy.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

            expect(softUniFy.songsList).to.equal(
                'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...'
            );
        });
    });

    describe('rateArtist', function () {
        it('should return message for no artist found', function () {
            expect(softUniFy.rateArtist('Eminem')).to.equal('The Eminem is not on your artist list.');
        });
        it('should change rate and vote of artist', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softUniFy.rateArtist('Eminem', '2');

            expect(softUniFy.allSongs['Eminem']['rate']).to.equal(2);
            expect(softUniFy.allSongs['Eminem']['votes']).to.equal(1);
        });
        it('should return proper result from function', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            expect(softUniFy.rateArtist('Eminem', '2')).to.equal(2);
        });
        it('should return 0 if result becomes Nan', function () {
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            expect(softUniFy.rateArtist('Eminem', 'a')).to.equal(0);
        });
    });
});