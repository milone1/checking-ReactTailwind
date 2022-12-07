import React, { useState, useContext } from "react";
import { Grid, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
// import { useStepperContext } from "../../contexts/StepperContext";
import ListDropDown from "../ListDropDown";
import { UserContext } from "../../contexts/StepperContext.jsx"
import { useParams } from "react-router-dom";
import { listDocument, listSex, listTravel } from "../../list";
import { useEffect } from "react";
import { getDataFromCodePassenger } from "../service";

export default function Account({step}) {
  // const { userData, setUserData } = useStepperContext();
  var {listUser, values, setValues, open, setOpen } = useContext(UserContext);
  //const {listUser} useContext(UserContext); 
  const [country, setCountry] = useState([]);
  const paperStyle = { marginTop: 180, marginBottom: 180, marginRight: 180, padding: 20, height: 'auto', width: 300 }

  // const [values, setValues] = useState({});
  const params = useParams();

  // const [open, setOpen] = useState(false);

  //* change tNombre
  const [errorTNombre, setErrorTNombre] = useState(false);
  const [leyendTNombre, setLeyendTNombre] = useState("");

  //* change tApellido
  const [errorTApellidoPaterno, setErrorTApellidoPaterno] = useState(false);
  const [leyendTApellidoPaterno, setLeyendTApellidoPaterno] = useState("");

  //* change tMaterno
  const [errorTApellidoMaterno, setErrorTApellidoMaterno] = useState(false);
  const [leyendTApellidoMaterno, setLeyendTApellidoMaterno] = useState("");
  //* change tMaterno
  const [errorTDocumento, setErrorTDocumento] = useState(false);
  const [leyendTDocumento, setLeyendTDocumento] = useState("");
  //* change tDomicilio
  const [errorTDomicilio, setErrorTDomicilio] = useState(false);
  const [leyendTDomicilio, setLeyendTDomicilio] = useState("");
  //* change telePhone
  const [errorTelePhone, setErrorTelePhone] = useState(false);
  const [leyendTelePhone, setLeyendTelePhone] = useState("");
  //* change Button

  const [codePassenger, setCodePassenger] = useState([]);
  const [ids, setIds] = useState(0);

  var Send = "Enviar";
  var Save = "Guardar";
  var lMigrado = 0;

  var regName = /^[a-zA-Z]+$/;
  var regNumbers = /[A-Za-z0-9]+/g;

  const fetchDataFromCountry = async () => {
    const response = await getDataFromCodePassenger('https://www.api.infomatica.pe/api/getPaises/');
    setCountry(response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "tNombre":
        if (!regName.test(value)) {
          setErrorTNombre(true);
          setLeyendTNombre("Nombre Incorrecto.");
        } else {
          setErrorTNombre(false);
          setLeyendTNombre("");
        }
        break;
      case "tPaterno":
        if (!regName.test(value)) {
          setErrorTApellidoPaterno(true);
          setLeyendTApellidoPaterno("Apellido Paterno Incorrecto");
        } else {
          setErrorTApellidoPaterno(false)
          setLeyendTApellidoPaterno("");
        }
        break;
      case 'tMaterno':
        if (!regName.test(value)) {
          setErrorTApellidoMaterno(true);
          setLeyendTApellidoMaterno("Apellido Materno Incorrecto");
        } else {
          setErrorTApellidoMaterno(false)
          setLeyendTApellidoMaterno("");
        }
        break;
      case 'tDocumento':
        if (!regNumbers.test(value)) {
          setErrorTDocumento(true);
          setLeyendTDocumento("Documento Incorrecto");
        } else {
          setErrorTDocumento(false)
          setLeyendTDocumento("");
        }
        break;
      case 'tDomicilio':
        if (value.length === 0) {
          setErrorTDomicilio(true);
          setLeyendTDomicilio("Ingrese Domicilio Valido");
        } else {
          setErrorTDomicilio(false)
          setLeyendTDomicilio("");
        }
        break;
      case 'tCelular':
        if (!regNumbers.test(value)) {
          setErrorTelePhone(true);
          setLeyendTelePhone("Ingrese telefono válido");
        } else {
          setErrorTelePhone(false)
          setLeyendTelePhone("");
        }
        break;
      default:
    }
    setValues({
      ...values,
      [name]: value,
      // tCodigoReserva: params.reserva,
      // tHotel: params.hotel,
      // lMigrado: lMigrado,
      // tCodigoPasajero: codePassenger[ids].tCodigoPasajero,
    });
    console.log(Object.entries(values).length);
    if (
      errorTNombre === false &&
      errorTApellidoMaterno === false &&
      errorTApellidoPaterno === false &&
      errorTDocumento === false &&
      errorTDomicilio === false &&
      errorTelePhone === false &&
      Object.entries(values).length === 6) {
      setOpen(false);
      console.log("Valor seteado");
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    fetchDataFromCountry()
  }, [])
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Datos Generales: {step}
        </div>
        <div className="my-2 gap-4 flex rounded border border-gray-200 bg-white p-1 justify-around">
          <TextField
            error={errorTNombre}
            onChange={handleChange}
            helperText={leyendTNombre}
            variant="standard"
            name="tNombre"
            label='Primer Nombre:'
            required
            fullWidth
          />
          <TextField
            error={errorTNombre}
            onChange={handleChange}
            helperText={leyendTNombre}
            variant="standard"
            name="tNombre"
            label='Primer Nombre:'
            required
            fullWidth
          />
        </div>
        <div className="my-2 gap-4 flex rounded border border-gray-200 bg-white p-1 justify-around">
          <TextField
            variant="standard"
            error={errorTApellidoPaterno}
            name="tPaterno"
            helperText={leyendTApellidoPaterno}
            onChange={handleChange}
            label='Apellido paterno:'
            fullWidth
            required
          />
          <TextField
            variant="standard"
            error={errorTApellidoMaterno}
            name="tMaterno"
            helperText={leyendTApellidoMaterno}
            onChange={handleChange}
            label='Apellido Materno:'
            fullWidth
            required
          />
        </div>
      </div>
      <div className="my-2 gap-4 flex rounded border border-gray-200 bg-white p-1 justify-around items-center">
      {/* <ListDropDown
          text="Documento identidad:"
          list={listDocument}
          handleChangeInputs={handleChange}
          name="tTipoDocumento"
        />  */}
        <TextField
          error={errorTDocumento}
          variant="standard"
          name="tDocumento"
          helperText={leyendTDocumento}
          onChange={handleChange}
          label='Documento'
          fullWidth
          placeholder='Número de documento:'
          required
        />
      </div>
      <div className="my-2 gap-4 flex rounded border border-gray-200 bg-white p-1 justify-around">
       {/* <ListDropDown
          text="Ingrese su género:"
          list={listSex}
          handleChangeInputs={handleChange}
          name="tSexo"
        /> 
        <ListDropDown
          text="Motivo de viaje:"
          list={listTravel}
          handleChangeInputs={handleChange}
          name="tMotivoViaje"
        /> */}
      </div>
      <div className="my-2 gap-4 flex rounded border border-gray-200 bg-white p-1 justify-around">
      {/* <ListDropDown
          text="Motivo de viaje:"
          list={listTravel}
          handleChangeInputs={handleChange}
          name="tMotivoViaje"
        />
        <ListDropDown
          text="Ingrese su pais:"
          list={country}
          handleChangeInputs={handleChange}
          name="tIdentificadorSunat"
        /> */} 
      </div>
      <div className="my-2 gap-4 flex rounded border border-gray-200 bg-white p-1 justify-around">
        <TextField
          variant="standard"
          error={errorTDomicilio}
          name="tDomicilio"
          helperText={leyendTDomicilio}
          onChange={handleChange}
          label='Ingrese Domicilio:'
          fullWidth
          Vrequired
        />
        <TextField
          variant="standard"
          error={errorTelePhone}
          name="tCelular"
          helperText={leyendTelePhone}
          onChange={handleChange}
          label='n° de Teléfono:'
          fullWidth
          required
        />
      </div>
    </div>
  );
}
