const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            });

            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
};

// Menggunakan then catch
cekHariKerja('senin')
    .then((result) => {
        console.log('Hari kerja:', result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });

// Menggunakan try catch
async function checkDayUsingTryCatch(day) {
    try {
        const result = await cekHariKerja(day);
        console.log('Hari kerja:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

checkDayUsingTryCatch('selasa');
