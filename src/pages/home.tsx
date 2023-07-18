import React, { useState } from 'react';
import Nav from '../component/nav';
import {State} from '../component/state';
import {useParams} from 'react-router-dom';
import Modal from '../component/modal'



const Home: React.FC = () => {
  const [showReferral, setShowReferral] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [formData, setFormData] = useState<State>({
    nama:'',
    jenisKelamin:'',
    tanggalLahir:'',
    phone:'',
    email:'',
    domisili:'',
    pendTerakhir:'',
    univ:'',
    jurusan:'',
    ipk:'',
    perusahaan:'',
    posisiT:'',
    posisi:'',
    sumber:'',
    referal:'',
    addedDate:new Date().toISOString().split('T')[0].toString(),
    HCDate:'',
    pysDate:'',
    userDate:'',
    offeringDate:'',
    MCUDate:'',
    hasilHC:'',
    hasilPys:'',
    hasilUser:'',
    hasilOffering:'',
    hasilMCU:'',
    status:'Interview HC',
    HCStatus:'Not Yet',
    userStatus:'',
    pysStatus:'',
    offeringstatus:'',
    mcuStatus:'',
    lokasi:'',
    _id:undefined
  });

  const {uuid} = useParams<{uuid:string}>();
  console.log(uuid)

  const pendidikan = [
    {
        "name":"D3",
        "value":"D3"
    },
    {
        "name":"D4",
        "value":"D4"
    },
    {
        "name":"S1",
        "value":"S1"
    },
    {
        "name":"S2",
        "value":"S2"
    },
    {
        "name":"S3",
        "value":"S3"
    },
  ]
  const posisi = [
    {
        "name":"BDP",
        "value":"BDP"
    },
    {
        "name":"Marketing",
        "value":"Marketing"
    },
    {
        "name":"Surveyor",
        "value":"Surveyor"
    },
    {
        "name":"Akseptasi",
        "value":"Akseptasi"
    },
    {
        "name":"Klaim",
        "value":"Klaim"
    },
  ]

  const lokasiKerja = [
    {
        "name":"Kantor Pusat - SSC",
        "value":'Kantor Pusat - SSC'
    },
    {
        "name":"Kantor Pusat - WTC",
        "value":'Kantor Pusat - WTC'
    }
  ]

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const insertData = async (data: State) => {
    if (!uuid) {
      console.error('UUID is undefined.');
      return;
    }
  
    // const res = await fetch(`http://localhost:3001/client/${uuid}`, {
    const res = await fetch(`htpps://rekrutserver.stheven.website/client/${uuid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    switch (res.status) {
      case 200:
        setModalText('Sukses Input Data');
        setShowModal(true)    
            
    
        break;
      case 401:
        setModalText('Link Tidak Valid');
        setShowModal(true)    
            
        break;
      case 500:
        setModalText('Gagal Input Data');
        setShowModal(true)    
            
        break;
    }
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      await insertData(formData);
      console.log(formData);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='bg-[#cdcdcd]'>
      <Nav />
      {showModal && (
        <Modal
        text={modalText}
        onClick={()=>setShowModal(false)}
        />
      )}
      <div className="container mx-auto px-4 py-8">
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          {/* Section: Data Diri */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Data Diri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                placeholder="Nama Lengkap"
                className="input-field"
                required
              />
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="male"
                  onChange={handleInputChange}
                  required
                />
                <label className="mr-4 lg:mr-0">Laki-Laki</label>
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="female"
                  onChange={handleInputChange}
                />
                <label>Perempuan</label>
              </div>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                max={new Date().toISOString().split('T')[0]}
                className="input-field"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Nomor Telepon"
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input-field"
                required
              />
              <textarea
                name="domisili"
                value={formData.domisili}
                onChange={handleInputChange}
                placeholder="Alamat Domisili"
                rows={3}
                className="input-field resize-none"
                required
              />
            </div>
          </div>

          {/* Section: Pendidikan */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Pendidikan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="pendTerakhir"
                value={formData.pendTerakhir}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="">Pilih Jenjang Pendidikan</option>
               {pendidikan.map((item:{name:string, value:string})=>(
                <option key={item.value} value={item.value}>{item.name}</option>
               ))}
              </select>
              <input
                type="text"
                name="univ"
                value={formData.univ}
                onChange={handleInputChange}
                placeholder="Universitas"
                className="input-field"
                required
              />
              <input
                type="text"
                name="jurusan"
                value={formData.jurusan}
                onChange={handleInputChange}
                placeholder="Jurusan"
                className="input-field"
                required
              />
              <input
                type="text"
                name="ipk"
                value={formData.ipk}
                onChange={handleInputChange}
                placeholder="GPA"
                className="input-field"
                required
              />
            </div>
          </div>

          {/* Section: Pengalaman Kerja */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Pengalaman Kerja</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="perusahaan"
                value={formData.perusahaan}
                onChange={handleInputChange}
                placeholder="Perusahaan Terakhir"
                className="input-field"
                required
              />
              <input
                type="text"
                name="posisiT"
                value={formData.posisiT}
                onChange={handleInputChange}
                placeholder="Posisi Terakhir"
                className="input-field"
                required
              />
              <select
                name="posisi"
                value={formData.posisi}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="">Pilih Posisi yang Dilamar</option>
                {posisi.map((item:{name:string, value:string})=>(
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
              </select>
              <select
                name="lokasi"
                value={formData.lokasi}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="">Pilih Lokasi</option>
               {lokasiKerja.map((item:{name:string, value:string})=>(
                <option key={item.value} value={item.value}>{item.name}</option>
               ))}
              </select>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <label className="mr-4">Sumber Lowongan:</label>
            <select
              name="sumber"
              value={formData.sumber}
              onChange={(e) => {
                handleInputChange(e);
                setShowReferral(e.target.value === 'referral');
              }}
              className="input-field"
              required
            >
              <option value="">Pilih Sumber Lowongan</option>
              <option value="job_fair">Job Fair</option>
              <option value="job_portal">Job Portal</option>
              <option value="referral">Referral</option>
            </select>
          </div>

          {showReferral && (
            <div className="mb-6">
              <input
                type="text"
                name="referal"
                value={formData.referal}
                onChange={handleInputChange}
                placeholder="Referal Nama"
                className="input-field"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-full transform-gpu active:scale-90 duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
