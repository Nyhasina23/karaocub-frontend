import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from "../assets/Logo.png";
import homeImg from "./../assets/icons/home.svg";
import repertoireImg from "./../assets/icons/repertoire.svg";
import categoriesImg from "./../assets/icons/categories.svg";
import voiceImg from "./../assets/icons/voice.svg";
import songWhiteImg from "./../assets/icons/songWhite.svg";
import micImg from "./../assets/icons/mic.svg";
import playlistImg from "./../assets/icons/playlist.svg";
import playlistSmallImg from "./../assets/icons/playlistSmall.svg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { BsFileEarmarkMusic } from "react-icons/bs";
import AddButton from "./AddButton";

export function SideBar() {
  const [open, setOpen] = React.useState(0);
  const [openSubIndex, setOpenSubIndex] = React.useState(null);
  const [openSubCat, setOpenSubCat] = React.useState(null);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const handleOpenSubCat = (value: any) => {
    setOpenSubCat(openSubCat === value ? 0 : value);
  };

  const handleOpenSubIndex = (value: any) => {
    setOpenSubIndex(openSubIndex === value ? 0 : value);
  };

  return (
    <Card className="h-[100vh] w-[16rem] p-4 shadow-xl shadow-white-900/5 card-style">
      <div className="mb-2 p-4 flex justify-center">
        <img src={logo} alt="logo" className="w-[10rem]" />
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              color="white"
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="border-b-0 p-3" selected={open === 1}>
            <ListItemPrefix>
              <img src={homeImg} alt="" />
            </ListItemPrefix>
            <Typography color="white" className="mr-auto font-normal">
              Accueil
            </Typography>
          </ListItem>

          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <img src={repertoireImg} alt="" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Répertoire
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 1 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <img src={voiceImg} alt="" />
                  </ListItemPrefix>
                  Les plus chantés
                </ListItem>
                <Accordion
                  open={openSubCat === 1}
                  icon={
                    <ChevronDownIcon
                      color="white"
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${
                        openSubCat === 1 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={openSubCat === 1}>
                    <AccordionHeader
                      onClick={() => handleOpenSubCat(1)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <img src={categoriesImg} alt="" />
                      </ListItemPrefix>
                      <Typography color="white" className="mr-auto font-normal">
                        Catégories
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  {openSubCat === 1 && (
                    <AccordionBody className="p-0 ml-4">
                      <List className="p-0">
                        <ListItem className="text-white">
                          <ListItemPrefix>
                            <img src={categoriesImg} alt="" />
                          </ListItemPrefix>
                          Sous catégories
                        </ListItem>
                      </List>
                    </AccordionBody>
                  )}
                </Accordion>

                <ListItem className="text-white">
                  <ListItemPrefix>
                    <img src={songWhiteImg} alt="" />
                  </ListItemPrefix>
                  Titres
                </ListItem>
                <ListItem className="text-white">
                  <ListItemPrefix>
                    <img src={micImg} alt="" />
                  </ListItemPrefix>
                  Artistes
                </ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
      </List>
      <hr className="mt-40 mb-10 separator" />
      <List>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              color="white"
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <img src={playlistImg} alt="" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Vos playlists
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 2 && (
            <>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <img src={playlistSmallImg} alt="" />
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <img src={playlistSmallImg} alt="" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <img src={playlistSmallImg} alt="" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
              <AddButton text="AJOUTER UNE PLAYLIST" />
            </>
          )}
        </Accordion>
      </List>
      <List>
        <div className="flex border-b-0 p-3">
          <ListItemPrefix>
            <MdOutlineSlowMotionVideo
              color="white"
              className="h-[1.5rem] w-[1.5rem] mr-1"
            />
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            Vidéos
          </Typography>
        </div>
      </List>
      <List>
        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              color="white"
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <BiCategory
                  color="white"
                  className="h-[1.5rem] w-[1.5rem] mr-1"
                />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Catégories
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 3 && (
            <AccordionBody className=" h-[15rem] overflow-y-scroll scrollbar-hide">
              <List className="p-0">
                {categories.map((cat, index) => (
                  <ListItem className="text-white">
                    <div className="flex flex-col items-center justify-center">
                      {cat.subcategories?.length! > 0 ? (
                        <List className="p-0">
                          <div className="flex items-center justify-start w-full">
                            <ListItemPrefix>
                              <BsFileEarmarkMusic
                                color="white"
                                className="w-4 h-4 mr-2"
                              />
                            </ListItemPrefix>

                            {cat.name}

                            <Accordion
                              open={openSubIndex === index}
                              icon={
                                <ChevronDownIcon
                                  color="white"
                                  className={`mx-auto h-4 w-4 ml-2 transition-transform ${
                                    openSubIndex === index ? "rotate-180" : ""
                                  }`}
                                />
                              }
                            >
                              <ListItem
                                className="p-0"
                                selected={openSubIndex === index}
                              >
                                <AccordionHeader
                                  onClick={() => handleOpenSubIndex(index)}
                                  className="border-b-0 p-0"
                                  children={undefined}
                                ></AccordionHeader>
                              </ListItem>
                            </Accordion>
                          </div>
                          {openSubIndex === index && (
                            <AccordionBody className="!pb-[0] !mb-[-1rem]">
                              <List className="p-0">
                                {cat.subcategories?.map((sub) => (
                                  <ListItem className="text-white">
                                    <ListItemPrefix>
                                      <MdLibraryMusic className="h-4 w-4 mr-2 text-slate-50" />
                                    </ListItemPrefix>
                                    {sub}
                                  </ListItem>
                                ))}
                              </List>
                            </AccordionBody>
                          )}
                        </List>
                      ) : (
                        <div className="flex items-center justify-start w-full">
                          <ListItemPrefix>
                            <BsFileEarmarkMusic
                              color="white"
                              className="w-4 h-4 mr-2"
                            />
                          </ListItemPrefix>

                          {cat.name}
                        </div>
                      )}
                    </div>
                  </ListItem>
                ))}
              </List>
            </AccordionBody>
          )}
        </Accordion>
      </List>
    </Card>
  );
}

const categories = [
  {
    name: "Rock",
    subcategories: ["Classic Rock", "Alternative", "Indie Rock"],
  },
  { name: "Pop", subcategories: ["Top 40", "Indie Pop"] },
  { name: "Hip Hop", subcategories: ["Rap", "Trap", "Old School"] },
  { name: "Jazz" },
  { name: "Electronic", subcategories: ["Techno", "House", "Dubstep"] },
  { name: "Classical" },
  { name: "Country", subcategories: ["Traditional", "Country Pop"] },
  { name: "R&B" },
  { name: "Reggae", subcategories: ["Roots Reggae", "Dancehall"] },
  { name: "Folk" },
];
