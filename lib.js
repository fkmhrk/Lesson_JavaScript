function getNextStardust(level) {
    if (level < 3) return 200;
    if (level < 5) return 400;
    if (level < 7) return 600;
    if (level < 9) return 800;
    if (level < 11) return 1000;
    if (level < 13) return 1300;
    if (level < 15) return 1600;
    if (level < 17) return 1900;
    if (level < 19) return 2200;
    if (level < 21) return 2500;
    if (level < 23) return 3000;
    if (level < 25) return 3500;
    if (level < 27) return 4000;
    if (level < 29) return 4500;
    if (level < 31) return 5000;
    if (level < 33) return 6000;
    if (level < 35) return 7000;
    if (level < 37) return 8000;
    if (level < 39) return 9000;
    return 10000;
}
