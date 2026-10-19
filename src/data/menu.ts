import { MenuCategory } from "@/types/menu";

export const MENU: MenuCategory[] = [
  
  {
    id: "salads",
    title: "Салаты",
    items: [
      { name: "Теплый салат с грибами",
        price: "400",
        weight: "250 г",
        description: "Микс , грибы, сливки , сулугуни, кунжут ",
        image: "/images/menu/tepliy-salat-s-gribami.jpg"
      },
      { name: "Чими-Чури со страчателлой", price: "450" },
      {
        name: "Салат с морепродуктами",
        price: "690",
        weight: "220 г",
      },
      { name: "Хрустящие баклажаны", price: "450" },
      { name: "Цезарь с курицей",
         price: "380",
         weight: "230 г",
         description: "Микс салата , куриное филе , чери, фирменный соус цезарь",
        image: "/images/menu/tsezar-s-kuritsey.jpg"
      },
    ],
  },
  {
    id: "hot",
    title: "Горячие блюда",
    items: [
      { name: "Куриный стейк с ореховым соусом", price: "590" },
      { name: "Фьюжн-стейк Том Татаки", price: "550" },
      { name: "Букатини с вешенками", price: "460" },
      { name: "Ригатони Страчателла", price: "520" },
      { name: "Ньокки Carbonella", price: "550" },
      { name: "Чикин Строганов", price: "420" },
      { name: "Детский Сет", 
        price: "450",
        weight: "250 г",
        description: "Куриное филе , картофель фри , микс салата , кетчуп",
        image:  "/images/menu/detskiy-set.jpg"},
      { name: "Бургер Пространство", price: "550" },
      { name: "Бургер Коул-Слоу", price: "590" },
      { name: "Стейк Тибон", price: "220", note: "100 г." },
      { name: "Стейк Рибай", price: "220", note: "100 г." },
    ],
  },
  {
    id: "soups",
    title: "Супы",
    items: [
      { name: "Том ям", price: "620" },
      { name: "Куриный", price: "320" },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    items: [
      { name: "Фондан", price: "350" },
      { name: "Сырники «Клубника-Финик»", price: "470" },
      { name: "Венские вафли «Банановый взрыв»", price: "490" },
    ],
  },
  {
    id: "pizza",
    title: "Пиццы",
    items: [
      { name: "Ассорти", price: "750/950", size: "45/50 см" },
      { name: "Пепперони", price: "750/950", size: "45/50 см" },
      { name: "Грибная", price: "750/950", size: "45/50 см" },
      { name: "Куриная", price: "750/950", size: "45/50 см" },
      { name: "Цезарь", price: "750/950", size: "45/50 см" },
      { name: "BBQ", price: "750/950", size: "45/50 см" },
      { name: "Охотничья", price: "750/950", size: "45/50 см" },
      { name: "Сицилия", price: "750/950", size: "45/50 см" },
      { name: "Жульен", price: "750/950", size: "45/50 см" },
      { name: "Мясная", price: "750/950", size: "45/50 см" },
      { name: "4 сыра", price: "750/950", size: "45/50 см" },
      { name: "Ананасовая", price: "750/950", size: "45/50 см" },
      { name: "Ойси", price: "1200", size: "45 см" },
      { name: "Том Ям", price: "1200", size: "45 см" },
    ],
  },
  {
    id: "rolls",
    title: "Роллы",
    subcategories: [
      {
        title: "Холодные",
        items: [
          { name: "Бешеная креветка", price: "490" },
          { name: "Лосось Ким Чи", price: "470" },
          { name: "Филадельфия", price: "490" },
          { name: "Авокадо BBQ", price: "460" },
          { name: "Калифорния", price: "430", note: "креветка, лосось, краб" },
          { name: "Red Flag", price: "450" },
          { name: "Чука", price: "490" },
          { name: "Ойси", price: "510" },
        ],
      },
      {
        title: "Горячие",
        items: [
          {name:"Удон",
            price: "#",
            image: "/images/menu/udon.jpg"
          },
          { name: "Пылающий лосось", price: "420" },
          { name: "Сгущенка Васаби", price: "390" },
          { name: "Цезарь курица", price: "370" },
          { name: "Цезарь креветка", price: "390" },
          { name: "Ойси горячий", price: "490" },
        ],
      },
      {
        title: "Запечённые",
        items: [
          { name: "Черный жемчуг", price: "490" },
          { name: "Галлюцинация", price: "490" },
          { name: "Том Кай", price: "440" },
          { name: "Нагоя", price: "470" },
        ],
      },
    ],
  },
];