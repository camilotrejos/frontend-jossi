import { useState, useEffect } from "react";
import React from 'react'

const servImages = require.context('../Imagenes', true);

export const ServiciosTodos = () => {

    const [dataServicios, setdataServicios] = useState([]);
    
    const fetchServicios = ()=>{
        fetch('http://localhost:8080/api/servicios')
            .then(res => res.json())
            .then(data=>{
                setdataServicios(data)
                console.log(data);
    
            })
      }

    useEffect(()=>{
        fetchServicios();
    },[])

    return (
        <>
            <section>
                <div className="d-flex justify-content-center">
                    <h1>Nuestros servicios</h1>
                </div>
                <p></p>

                    <div className="row gx-4 gx-lg-5">     
                        {dataServicios.map((serv)=>{   
                            return(
                                <div key={serv._id} className="col-md-4 mb-5">
                                    <a href={`../servicios/${serv._id}`} className="text-decoration-none">
                                        <div className="card bg-dark text-light border-0 servicios">
                                            <img alt="" src={servImages(`./${serv.url_imagen_servicio}`).default} className="card-img-top" />
                                            <div className="card-body">
                                                <h4 className="card-title">{serv.nombre_servicio}</h4>
                                                <h6>Costo: ${serv.costo_servicio}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}          
                    </div>
            </section>
        </>
    )
}