"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BiLeaf, BiRecycle, BiAtom } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";



const PerfumeLanding = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const products = [
    {
      id: 1,
      name: "9 PM AFNAN 100ML UNISEX 2020",
      description: "Una cautivadora Fragancia de vainilla, frutas, picante fresco",
      price: "$35.990",
      image: "https://somosofertas.com/wp-content/uploads/2023/06/IMG_3520.jpeg"
    },
    {
      id: 2,
      name: "GLACIER BOLD MAISON ALHAMBRA 100ML",
      description: "Notas marinas frescas con toques cítricos",
      price: "$35.990",
      image: "https://th.bing.com/th/id/R.b5b26c0ff040c1d51c5f92367f57c535?rik=TUViv5kWN7XsYw&riu=http%3a%2f%2fwww.nmperfumerias.cl%2fcdn%2fshop%2fproducts%2fmaison-alhambra-glacier-bold-edp-100ml.jpg%3fv%3d1702047514&ehk=gvzcajRkbmkF22z1%2f11S4GuLU1ixzrf3ljEby7XZz7I%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 3,
      name: "SUQRAAT LATTAFA EAU DE PARFUM 100ML",
      description: "Rico amaderado con notas citricas, lavanda y ambar",
      price: "$35.990",
      image: "https://th.bing.com/th/id/OIP.scu5Rxnnra0HQLzYcmJi8gHaHa?rs=1&pid=ImgDetMain"
    },
    {
      id: 4,
      name: "JEAN LOWE INMORTEL MAISON ALHAMBRA 100ML",
      description: "Notas super citricas y frescas, siendo un perfume muy aromatico",
      price: "$35.990",
      image: "https://cazanovaonline.mx/cdn/shop/files/2_6ae5c223-d252-417b-a5bf-5c2d85722c05.jpg?v=1710613729"
    }
  ];

  const products2 = [
    {
      id: 5,
      name: "PACIFIC BLUE MAISON ALHAMBRA 30ML",
      description: "Una fragancia fresca para este verano de calor",
      price: "$15.000",
      image: "https://perfumesforlessng.com/pfl-content/uploads/2024/05/Maison-Alhambra-Pacific-Blue-30ml.png"
    },
    {
      id: 6,
      name: "SALVO EDP MAISON ALHAMBRA 100ML MEN",
      description: "Perfecta fragancia, un perfume fresco picante con notas citricas y florales",
      price: "$24.000",
      image: "https://th.bing.com/th/id/OIP.KNeg65fGnGbZe2fQ8rpjBwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      id: 7,
      name: "B.A.D HOMME MAISON ALHAMBRA EDP 100ML UNISEX",
      description: "Dulce aroma a cacao, con salidas picantes, citricas y aromaticas",
      price: "$24.990",
      image: "https://th.bing.com/th/id/R.7c99eb89d6aabe7f124642d2de38f45d?rik=Zie%2fHqO%2f4Mfcxg&riu=http%3a%2f%2fwww.nmperfumerias.cl%2fcdn%2fshop%2fproducts%2fbad-homme.jpg%3fv%3d1702047483&ehk=mwalCslxoxJ7OeO%2bGC6CSTOTT5L8BVajZjkP5vTDCjQ%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 8,
      name: "YEAH! MAISON ALHAMBRA 100ML FOR MEN ",
      description: "Rico perfume aromatico, freso especiado, bien amaderado un perfume de lo mas calido",
      price: "$28.000",
      image: "https://th.bing.com/th/id/R.e1cba89c2abd9bd202871158fc8bfbbe?rik=Qq9KOz14g6SjsQ&riu=http%3a%2f%2fproductosdelujo.cl%2fcdn%2fshop%2ffiles%2fMaison-Alhambra-Yeah-100-ml-Edp-Hombre_600x.png%3fv%3d1694405320&ehk=nYkSm8gm6TsvTpf6rAidvgNCFPmz6RV%2fj7QQDG5Ul1s%3d&risl=&pid=ImgRaw&r=0"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Natacha Montiel Barria",
      comment: "Las fragancias más exquisitas que he experimentado. Puro lujo en cada botella.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1"
    },
    {
      id: 2,
      name: "Roberto manfinfla",
      comment: "Estos perfumes son obras maestras. La atención al detalle es extraordinaria.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/Image/TechCompany.jpg"
            alt="Perfume de Lujo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0  bg-[url('/portada.jpg')] bg-cover bg-[center_bottom_20%]" />
        <div className="relative  max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Catalogo</h1>
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Esencial del Lujo</h2>
            <p className="text-xl md:text-2xl mb-8">Colección de fragancias para este verano</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition duration-300">
              <span>Explorar Colección</span>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl text-gray-900 font-serif text-center mb-16">Colecciones Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl text-black font-serif mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-xl text-black font-semibold mb-4">{product.price}</p>
              <Link href={`/data/${product.id}`} className="block w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition duration-300 text-center"> Ver detalles</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl text-gray-900 font-serif text-center mb-16">Precios mas baratos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products2.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl text-black font-serif mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-xl text-black font-semibold mb-4">{product.price}</p>
              <a className="block w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition duration-300 text-center">Ver detalles</a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-8">Nuestra Mision</h2>
          <p className="text-lg text-white-700 mb-12 leading-relaxed">
            La mision principal de ensencial es llevar un perfume unico para nuestros clientes de la mejor calidad y precio, empezamos llevando la mejor fragancia para Quellon, Chiloe. Aqui empezamos nuestra mision entregando felicidad y alegria para cada uno de nuestros clientes que se llevan su perfume ideal
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-black text-4xl font-serif text-center mb-16">Testimonios</h2>
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${index === activeTestimonial ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-6 object-cover"
                  />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <BsStarFill key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-black italic mb-4">{testimonial.comment}</p>
                  <p className="font-serif text-lg text-black">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <BiLeaf className="w-16 h-16 mx-auto mb-6 text-gray-800" />
            <h3 className="text-xl text-black font-serif mb-4">Ingredientes Naturales</h3>
            <p className="text-gray-600">Procedentes de los mejores ingredientes naturales del mundo</p>
          </div>
          <div className="text-center">
            <BiRecycle className="w-16 h-16 mx-auto mb-6 text-gray-800" />
            <h3 className="text-xl text-black font-serif mb-4">Empaque Sostenible</h3>
            <p className="text-gray-600">Soluciones ecológicas para un mejor mañana</p>
          </div>
          <div className="text-center">
            <BiAtom className="w-16 h-16 mx-auto mb-6 text-gray-800" />
            <h3 className="text-xl text-black font-serif mb-4">Fórmulas Innovadoras</h3>
            <p className="text-gray-600">Técnicas de perfumería de vanguardia</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl bg-black mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Únete a Nuestro Viaje</h2>
          <p className="text-gray-600 mb-8">Suscríbete para recibir ofertas exclusivas y conocimientos sobre fragancias</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="flex-1 px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PerfumeLanding;
