import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Descripcionservicio } from './Descripcionservicio'
import { Otrosservicios } from './Otrosservicios'
import { Ultimoscomentarios } from './Ultimoscomentarios'

export const ServiciosDetalle = ()=>{
    
    const [dataServicio, setdataServicio] = useState([]);
    const [otrosServicios, setotrosServicios] = useState([]);

    const params = useParams();

    useEffect(()=>{
        fetch(`http://localhost:8080/api/servicios/${params._id}`)
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                setdataServicio(data);
            })
        
    },[setdataServicio, params._id]);

    useEffect(()=>{
        fetch('http://localhost:8080/api/servicios/')
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                setotrosServicios(data);
            })
        
    },[]);



    return (
        <>

            <div className="col-sm-12">
                <Descripcionservicio data={dataServicio}/>
            </div>
            <div className="col-sm-12">
                <Ultimoscomentarios />
            </div>
            <div className="col-sm-12">
                <Otrosservicios>
                    {otrosServicios.filter(serv=>serv._id!==params._id)}
                </Otrosservicios>
            </div>
    
        </>
    )
}


