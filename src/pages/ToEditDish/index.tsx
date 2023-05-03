import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { InputTags } from "../../components/InputTags";
import UploadSimple from '../../img/UploadSimple.png'
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { useEffect, useState } from 'react';
import { Textarea } from "../../components/Textarea";
import { HeaderAdm } from "../../components/HeaderAdm";

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import InputMask from "react-input-mask";




export function ToEditDish() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState("")
    const [newIngredient, setNewIngredient] = useState<string>("")
    const [ingredients, setIngredients] = useState<string[]>([])
    const [description, setDescription] = useState("")

    const [img, setImg] = useState(null)


    const params = useParams()
    const navigate = useNavigate()

    function handleAddIngredients(): void {
        setIngredients((prevState: any) => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredients(deleted: any) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleChangeImg(event: any) {
        const file = event.target.files[0]

        setImg(file)

    }



    async function updatedDish() {

        if (!img) {
            return alert("Selecionar imagem")
        }

        await api.put(`/dish/${params.id}`, {
            name,
            category,
            price,
            description,
        })

        const fileUploadForm = new FormData()
        fileUploadForm.append("img", img)

        await api.patch(`/dish/img/${params.id}`, fileUploadForm)

        await api.put(`/ingredients/${params.id}`, { ingredients })
            .then(() => alert("Prato criado com sucesso"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                }
                alert("Não foi possivel criar prato")
            })
        navigate("/")
    }

    async function deleteDish() {
        const confirm = window.confirm("Tem certeza que deseja excluir o prato?")
        if (confirm) {
            try {
                await api.delete(`/dish/${params.id}`)
                await api.delete(`/ingredients/${params.id}`)
                alert("Prato excluido com sucesso")
                navigate("/")
            } catch (error: any) {
                if (error.response) {
                    alert(error.response.data.message)
                }
                alert("Não foi excluir prato")
            }
        }
    }


    useEffect(() => {
        async function aa() {
            try {
                const { data }: any = await api.get(`/dish/preview/${params.id}`)

                setName(data?.[0].nameD)
                setCategory(data?.[0].category)
                setPrice(data?.[0].price)
                setIngredients(data?.[0].name.split(','))
                setDescription(data?.[0].description)

            } catch (error: any) {
                console.log(error.response.data.message)
            }
        }

        aa()



    }, [])

    return (
        <Container>
            <HeaderAdm dt={true} />
            <div className="section">
                <div className="imgButton">
                    <button onClick={() => navigate(-1)}><MdOutlineArrowBackIosNew /> Voltar</button>
                </div>
                <h1>Editar prato</h1>
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
                                    value={name}
                                />
                            </div>
                        </div>
                        <div className="category">
                            <h2>Categoria</h2>
                            <input
                                type="text"
                                list="categoria"
                                onChange={e => setCategory(e.target.value)}
                                value={category}
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
                                        ingredients?.map((ingredient, index) => (
                                            <InputTags
                                                key={String(index)}
                                                placeholder="Adicionar"
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredients(ingredient)}
                                            />
                                        ))
                                    }

                                    <InputTags
                                        isNew
                                        placeholder="Adicionar"
                                        onChange={(e: any) => setNewIngredient(e.target.value)}
                                        value={newIngredient}
                                        onClick={handleAddIngredients} />

                                </div>
                            </div>
                            <div className="price">
                                <h2>Preço</h2>

                                <InputMask
                                    id="card-number-input"
                                    mask="99.99"
                                    placeholder="R$ 00.00"
                                    value={price}
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
                                value={description}
                                placeholder="A Salada César é uma opção refrescante para o verão."
                            />
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="buttonToDelete">
                            <button onClick={deleteDish}>Excluir prato</button>
                        </div>
                        <div className="buttonToSave">
                            <button onClick={updatedDish}>Salvar alterações</button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer pgD />
        </Container>
    )
}