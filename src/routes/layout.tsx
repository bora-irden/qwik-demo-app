import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header';

export default component$(() => {
  return (
    <>
      <div class="min-h-full">
        <Header />
        <main>
          <section>
            <Slot />
          </section>
        </main>
      </div>
    </>
  );
});
