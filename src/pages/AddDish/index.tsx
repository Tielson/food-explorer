import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { InputTags } from "../../components/InputTags";
import UploadSimple from '../../img/UploadSimple.png'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { useState } from 'react';
import { Textarea } from "../../components/Textarea";
import { useNavigate } from "react-router-dom";
import { HeaderAdm } from "../../components/HeaderAdm";
import { api } from "../../services/api";
import InputMask from "react-input-mask";




export function AddDish() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState("")
    const [ingredient, setIngredient] = useState('')
    const [ingredients, setIngredients] = useState<string[]>([])
    const [description, setDescription] = useState("")
    const [img, setImg] = useState(null)


    const navigate = useNavigate()

    function handleAddTag(): void {
        if(!ingredient){
            return
        }
        setIngredients((prevState: any) => [...prevState, ingredient])
        setIngredient("")
    }

    function handleRemoveTag(deleted: any) {
        setIngredients(prevState => prevState.filter(tag => tag !== deleted))
    }


    function handleChangeImg(event: any) {
        const file = event.target.files[0]

        setImg(file)
    }

    async function createDish() {
        try {
            if (ingredient) {
                const confirm = window.confirm("Deseja adicionar ingrediente ?")
                if (confirm) {
                    handleAddTag()
                }
                setIngredient("")
            }
            if (!name || !category || !price || !description) {
                return alert("Preencher todos os campos")
            }

            if (!img) {
                return alert("Selecionar Imagem")
            }

            await api.post("/dish", {
                name,
                category,
                price,
                description,
            })

            const fileUploadForm = new FormData()
            fileUploadForm.append("img", img)

            await api.patch("/dish/img", fileUploadForm)

            await api.post("/ingredients", { names: ingredients })

            alert("Prato criado com sucesso")
            navigate("/")

        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message)
            }
            alert("Não foi possivel criar prato")
        }
    }


    return (
        <Container>
            <HeaderAdm dt={true} />
            <div className="section">
                <div className="imgButton">
                    <button onClick={() => navigate(-1)}><MdOutlineArrowBackIosNew /> Voltar</button>
                </div>
                <h1>Adicionar prato</h1>
                <div className="data">

                    <div className="line1">
                        <div className="IMG">
                            <h2>Imagem do prato</h2>
                            <label htmlFor="img">
                                <img src={UploadSimple} alt="upload" /> Selecione imagem
                                <input
                                    type="file"
                                    id="img"
                                    onChange={handleChangeImg}
                                />
                            </label>
                        </div>
                        <div>
                            <div className="name">
                                <h2>Nome</h2>
                                <input
                                    type="text"
                                    placeholder="Ex.: Salada Ceasar"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="category">
                            <h2>Categoria</h2>
                            <input
                                type="text"
                                list="categoria"
                                onChange={e => setCategory(e.target.value)}
                            />
                            <datalist id="categoria">
                                <option value="Refeições" />
                                <option value="Sobremesas" />
                                <option value="Bebidas" />
                            </datalist></div>
                    </div>

                    <div className="line2">
                        <div className="ingre pri">
                            <div className="T">
                                <h2>ingredientes</h2>
                                <div className="tags">
                                    {
                                        ingredients?.map((tag, index) => (
                                            <InputTags
                                                key={String(index)}
                                                placeholder="Adicionar"
                                                value={tag}
                                                onClick={() => handleRemoveTag(tag)}
                                            />
                                        ))
                                    }

                                    <InputTags
                                        isNew
                                        placeholder="Adicionar"
                                        onChange={(e: any) => setIngredient(e.target.value)}
                                        value={ingredient}
                                        onClick={handleAddTag} />

                                </div>
                            </div>
                            <div className="price">
                                <h2>Preço</h2>

                                <InputMask
                                    id="card-number-input"
                                    mask="99.99"
                                    placeholder="R$ 00.00"

                                    onChange={(e: any) => setPrice(e.target.value)} />





                            </div>
                        </div>
                    </div>
                    <div className="line3">
                        <h2>Descrição</h2>
                        <div>
                            <Textarea
                                defaultValue={description}
                                onChange={(e: any) => setDescription(e.target.value)}
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            />
                        </div>
                    </div>
                    <div className="buttonToSave">
                        <button onClick={createDish}>Salvar alterações</button>
                    </div>
                </div>
            </div>
            <Footer pgD />
        </Container>
    )
}