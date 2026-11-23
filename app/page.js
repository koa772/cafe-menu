import menus from '@/data/menus';
import MenuCard from '@/components/MenuCard';
import Section from '@/components/Section';
import MenuBoard from '@/components/MenuBoard';
import StampCard from '@/components/StampCard'; 

const categories = [
  { key: 'coffee', label: '☕ 커피' },
  { key: 'drink', label: '🧃 음료' },
  { key: 'dessert', label: '🍰 디저트' },
  { key: 'bakery', label: '🥖 베이커리' },
];

export default function Home() {
  const available = menus.filter((menu) => !menu.soldOut);
  const newMenus = menus.filter((menu) => menu.isNew);

  return (
    <main>
      <h1>☕ 루나 카페</h1>
      <p>전체 {menus.length}개 · 주문 가능 {available.length}개</p>
      <StampCard />
      <MenuBoard menus={menus} />
      {newMenus.length > 0 && (
        <p className="notice">
          🎉 신메뉴: {newMenus.map((menu) => menu.name).join(', ')}
        </p>
      )}

      {categories.map((cat) => {
        const items = menus.filter((menu) => menu.category === cat.key);
        return (
          <Section key={cat.key} title={`${cat.label} (${items.length})`}>
            {items.length === 0 ? (
              <p className="empty">준비 중인 메뉴입니다.</p>
            ) : (
              items.map((menu) => <MenuCard key={menu.id} {...menu} />)
            )}
          </Section>
        );
      })}
    </main>
  );
}
