'use client';

import Container from "@/app/components/ui/Container"
import Section from "@/app/components/ui/Section"
import { useState } from "react";
import Perks from "./select-perks";
import Category from "./select-category";

const CreatePackages = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [days, setDays] = useState();
  const [location, setLocation] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [perks, setPerks] = useState([]);
  const [price, setPrice] = useState();
  const [category, SetCategory] = useState([]);
  const [itinary, setItinary] = useState([]);

  function addPhotoByLink() {
    
  }

  return (
    <Section className="mt-28 md:px-3 mb-20">
      <Container className="flex flex-col gap-10 relative">
        <h1 className="text-gray-800 dark:text-gray-50 text-xl md:text-2xl font-semibold absolute bg-white dark:bg-neutral-950 top-0 -translate-y-1/2 left-5 px-2">
          Create a package
        </h1>
        <div className="border-2 shadow-sm dark:border-gray-700 rounded p-5">

          <form action="" className="mt-5 flex flex-col gap-5">
            <input
              type="text"
              className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="Title"
              value={title}
              onChange={ev => setTitle(ev.target.value)}
            />
            <textarea
              name=""
              id=""
              className="min-h-32 bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="description"
              value={description}
              onChange={ev => setDescription(ev.target.value)}
            />
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-2">
                <h1>Days :</h1>
                <select
                  name=""
                  id=""
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                >
                  <option className="bg-white dark:bg-neutral-950" value="1">1</option>
                  <option className="bg-white dark:bg-neutral-950" value="2">2</option>
                  <option className="bg-white dark:bg-neutral-950" value="3">3</option>
                  <option className="bg-white dark:bg-neutral-950" value="4">4</option>
                  <option className="bg-white dark:bg-neutral-950" value="5">5</option>
                  <option className="bg-white dark:bg-neutral-950" value="6">6</option>
                  <option className="bg-white dark:bg-neutral-950" value="7">7</option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-2">
                <h1>Nights :</h1>
                <input
                  type="text"
                  className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                  placeholder="Nights"
                />
              </div>  
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
                placeholder="Add Image using link"
              />
              <button className="bg-gray-500 px-3 py-2 rounded font-medium text-gray-50 w-40">
                Insert
              </button>
            </div>
            <input
              type="text"
              className="bg-transparent border-2 dark:border-gray-700 focus:outline-none px-3 py-2 rounded w-full"
              placeholder="Location"
            />
            <Perks selected={perks} onChange={setPerks}/>
            <Category selected={category} onChange={SetCategory}/>           
            <div className="w-full flex flex-row-reverse">
              <button className="bg-[#FF5956] px-3 py-2 rounded font-medium text-gray-50">
                Create Package
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default CreatePackages;