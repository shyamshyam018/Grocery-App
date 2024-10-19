import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  quantity: number;
  price: number;
  cost: number;
}

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss'],
})
export class CreateListComponent {
  searchQuery: string = '';

  
  dairyProducts: Product[] = [
    {
      name: 'Milk',
      description: 'Fresh milk',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/04/53/06/42/500_F_453064219_GqWMeOYsVmS5lTNJT9FSt1MjRlsUojdJ.jpg',
      quantity: 0,
      price: 50,
      cost: 0,
    },
    {
      name: 'Curd',
      description: 'Creamy curd',
      imageUrl: 'https://organicmandya.com/cdn/shop/files/Set_Curd_Front_1_ef400c06-c3a9-4e80-b538-b9b6f949fa7b.png?v=1720596755&width=1024', // Add your image URL
      quantity: 0,
      price: 40,
      cost: 0,
    },
    {
      name: 'Ghee',
      description: 'Creamy Ghee',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWUFzuSjRc6jQ_ulM3d6LlgUxMEKRSFbyhA&s', // Add your image URL
      quantity: 0,
      price: 40,
      cost: 0,
    },
    {
      name: 'ButterMilk',
      description: 'Creamy ButterMilk',
      imageUrl: 'https://images-greenchoice-io.nyc3.cdn.digitaloceanspaces.com/kates-real-cultured-buttermilk-q3.jpg', // Add your image URL
      quantity: 0,
      price: 40,
      cost: 0,
    },
    {
      name: 'Paneer',
      description: 'Spongy Panneer',
      imageUrl: 'https://healthynibblesandbits.com/wp-content/uploads/2018/10/How-to-Make-Paneer-10.jpg', // Add your image URL
      quantity: 0,
      price: 40,
      cost: 0,
    },
    {
      name: 'Butter',
      description: 'Butter',
      imageUrl: 'https://m.media-amazon.com/images/I/51KrxEKN58L.jpg', // Add your image URL
      quantity: 0,
      price: 40,
      cost: 0,
    },
    {
      name: 'Sweet Items',
      description: 'Sweet',
      imageUrl: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/MilkBarfi.webp', // Add your image URL
      quantity: 0,
      price: 40,
      cost: 0,
    },
    // Add more dairy products as needed
  ];

  vegetableProducts: Product[] = [
    {
      name: 'Tomato',
      description: 'Fresh tomatoes',
      imageUrl: 'https://dukaan.b-cdn.net/700x700/webp/289151/e689c537-1415-4a23-b4bf-81edeec2afac.png',
      quantity: 0,
      price: 30,
      cost: 0,
    },
    {
      name: 'Potato',
      description: 'Fresh potatoes',
      imageUrl: 'https://static.toiimg.com/photo/92522114.cms',
      quantity: 0,
      price: 25,
      cost: 0,
    },
    {
      name: 'Onion',
      description: 'Fresh onions',
      imageUrl: 'https://images.herzindagi.info/image/2023/Dec/benefits-of-eating-onions-in-winter-add-to-diet.jpg',
      quantity: 0,
      price: 20,
      cost: 0,
    },
    {
      name: 'Carrot',
      description: 'Crunchy carrots',
      imageUrl: 'https://www.trustbasket.com/cdn/shop/articles/Carrot.jpg?v=1688378789',
      quantity: 0,
      price: 40,
      cost: 0,
    },
    {
      name: 'Cabbage',
      description: 'Fresh green cabbage',
      imageUrl: 'https://www.jiomart.com/images/product/original/590002370/cabbage-1-pc-approx-600-g-1000-g-product-images-o590002370-p590002370-0-202409171904.jpg?im=Resize=(420,420)',
      quantity: 0,
      price: 35,
      cost: 0,
    },
    {
      name: 'Broccoli',
      description: 'Healthy broccoli',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKNWyig-7cLdmUQ3ldzuC09Cuy2jxDh0vLg&s',
      quantity: 0,
      price: 50,
      cost: 0,
    },
    {
      name: 'Spinach',
      description: 'Fresh spinach leaves',
      imageUrl: 'data:image/jpeg;base64,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',
      quantity: 0,
      price: 45,
      cost: 0,
    },
    // Add more vegetable products as needed
  ];
  
  fruitProducts: Product[] = [
    {
      name: 'Apple',
      description: 'Fresh and crunchy apples',
      imageUrl: 'https://thumbs.dreamstime.com/b/red-apple-leaf-slice-white-background-29914331.jpg',
      quantity: 0,
      price: 100,
      cost: 0,
    },
    {
      name: 'Banana',
      description: 'Sweet and ripe bananas',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhMWFRUVFxUVFRcXFhcVFxUXFRUWFhUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAD4QAAEDAgQDBQUFCAICAwAAAAEAAhEDBAUhMUESUWEGInGBkRMyobHRFEJSweEHFSNicoKS8DOiU/EWssL/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAMBEAAgIBBAEDAQYGAwAAAAAAAAECAxEEEiExQRMiUWEFMnGBkbFiocHR4fAUFUL/2gAMAwEAAhEDEQA/AM0wKQxBYFIptWBm0KwI7QhsCM0JGMhwCK1NaERoShHtTlwBOAQCIJ7U0BOAUIPCeE1oTwFCHQlKSUKEEkugJQoQauQnwlChBkLhCfC4QoQE5MKtrbBK1TPh4Rzdl8FKPZuB3qnoEkroR7ZMGcKaVcVcIEw1x8wq+6tHMOY80Y2wl0wuLRDKY5FIQ3BWABOQnIzghOCIADwguUhwQnBEhHchOUhwQXBMhSO8ILgpLgguCZAYCF1PhcTClsxqkMah0wjsCqY6CMCKAmNCK0JGMjrQjNCY1qIAgEcF1IBOAQCKE4BIBOAQIOaE+FwBGpW73e60nyUIDhdhT6WD1TtHijtwN/MJdyIVMJQrStgzxpmo7rB4+6pvRCHCSIWGYjNX2FdnSYfWyGoZuf6uXgpKaissj4KvDcJqVjIybu46eXNaWzwulRExxO/Ecz5clNqVQ0Q0QBoAolV0rn26pzeIhUc9nLi5JyCixOqe9yC58KjhcssX0E8BRLyiHtIKHe4i1nUqqr4mTulU+faHHyVtxS4SWoJUivU4sygkLt1ycopspaAuCE8KQ4ILwnIR3oTlIcEFwTCgHITgjuCE4JkAA4ITgpDgguCYVgYSToSRAW7ApDAgsCOxVMdBWBGaEJqM1KEe0IgCY1ECGAnQE8BcCtsLwZ9XP3Wczv4JW0llhK1jJyAnwVrZYG92b+6Pir+2tKdLusbJ3cVKY1Yp6tN4iHaRLXCKTPuyeZzU5tMDQAJEwuCokc2+2DA8MXQxN9sAmG45JXbFB2sNwBMNGcoT6bXHaEavU9k2Y4icvX5BHcmtz4Qr44BUbBjDxkDi58vBMrXE6Ide5LvBQzX1Efqsdl/qcLoeMPLDvcotSouPqKDeXzaYzOaTekizAe4rgCSVRX2MbNVbiGJl56KlubsDUplGUxsJFhc3sqKK5VX9snRWGHs4s1phQ1wgNlkzRIhPhNK60VhYKWDchOCM5CcnwAC5BejPQXJgAnBCcEZyE5MhQDkJyM9BciKCXUl1MAuGBHYFxrUZtNJtIpITQitSFEpwpFLsG3oe1EaF2nRK1uB4IKTRWrCXfdby/VV2SVcd0gqWeEAwfAg0CrX01Dfqrh1xOQEDYINeqXmT6ckgYXDv1Dt/AvjDHYZdFVRqj8s1BrXXLRZHcoFihks6twgGqolq19Qw0TzOw8SrenaikOIy52kwTmeQCMJWXddAe2I23tXOzPdHXVWFKi1uio766uBnTplx0hxbTYBznNx9FYULgu4Rudd/FaU41fVlclKRYGqGt4j5Krr3BcZKZiFYuMAwARw5TkI1z11UV7oWLUav1Xjwv5/X+w1deOfI+rWUSvchoLnTA5AuPoMyuuduqnEr/ZqohY5Mt2hcQxUNGSzV3elx1UTFcTZT950uOjRmT5KpoNr3BgAhvL6ldOnTcbpfqwOSXCJlxdDMA5qorW9QmcytlhXZM5F60FHA2N2WmNmz7qEfPZ5jh1k97oggLXW1EMhitMYw0NpufTADgJWdwi5rF8+yqOHMMcR6wtUbU4Zj2V4aZpKVkwjMp7sFnQo9CmXjNjm+II+al0qLxtkq43zDhFBc4TUbtKralBw1C3Qad0C4s2uGYV8dRjsVowz6JQH0zyWruLGFDfahbItSWUVuWDNvYeSC4LRPswo1SyTAyULggvCu6lj0UWpZooGSqhJTjZpJsgJ1F6uLUCM1UUy1S6FbaUWilMtu6lwhV9Wrlqrfsthvt3cTv+NnvHmeSrk1FZYxd4DhoA9vUGX3Rz6qdXrF5k6bBOu6/FkMmjQKK+pC81q9U7p/wo2VV7VnyOe6EJ1SBJQX1d1ArXJcYGZOgG6wTsb4iaIxDXV2j4ZhT63edLWc93eH1U/CcBAipXzOoZsP6uZ6K6q1gFpp0iit9v6Fc7v/ADAbRospN4WiAEGpdclHq3EqM6ons1GViPCFjX5Z2+uO6QNYQbHusknMiB0G58/91UDFLgNaTusdhnbMMqChVIHE9wD9Bw7Az97ZY/QtuUnDwWSkopI3z6iC926rLzFWUmmo9wDQJWJvO11zd1PYWdI56buI5nZo8VXp9Dbd10vL6C5xj2avGcXYwGXAAdVlnX1a5PDbMMaGoRl/aN1e4R+ztz4q3tQvfqGA91v1WlwPAPZEyXcP3WuDZEHWWrpV11VL2e5/Pj/P5g35+hk8F7DZ8dUlzjqStpZ4RTpDIBWwpxoo91UIGQk/JPO3zLlirnhFRXxqlTdwvIptnhDnnhBdyE6+KnUwHwQ4OB0LSCF5t+069LazOF8uFMHgAzaS85j+qB/gFP7H4n/CjjktOY0OYDjI8SVbdVKGmVy8iKac3E9Fo2zRnE+OZRstFmqOJO2KN+8H81zlqsdotdZc1GKI/JU1TGXg5on71B1WhalY6YNjLI1UF7lBN81CfiLRqj/ykTYSq2eSqK4IJCkPxNqjuuOPNdHQXuU9vgpujxkCSVwBOJSFSF1mjMhOpqDXYFKuLqAs7eYiZRjDIHIsOBJVYxNJHYybkOFpUJyRadlVndXtG7ZyUoXTeSfJUVNthVV5DRqTA816Iym23pNoN2HePM7qu7PvDi6pGTB8Tou4i0u3IJMyFw/tbU4xUvzNOnhl5H17sDOUBlaRMqK2gJk5+OaiG8NV/sqQJJPCBuT9Oq4G1zftNy4Jb3uqPFOmC5x0A/3ILUYVhDbccTodVOp2b0b9U/CMLbbMzg1He+78h0+abd3S3Rrjp1z979imU3Zwug9e6VdWrzqhPqoL3LLda+2WQikFL0KpVQXVpVdiWJtpiN1n3Sm8RLcEDtTXPAWtME78h0XnNy0RnnMnPqrvtBiJeCJ1+SsOyfYareEVKs06I/ycOQ5Lv6Gp1V5ZmumimwHBLrEnik1x9myOOo73GDr+J0bfLVezdnezNvZU/Z0W5/fefeeeZP5aBWWHWFK3pto0WBjG6Ab8yTueqI96F9qksePgpWWNITSUi5Q7m7jILHOxJFsYtjrm4DVU3F7PRBv7g81Q4hewHZxrny8JWVylOWEaYxSRH7U4Uy4IqAAVGwJMw5ozg9eR8tCoWE2VMZMEOGTswXTvJHkleYi4/wAOmC5/y6nkm4Rhfsu+7vPknoCcyte6ap2zl+C/3wJtW7KRfUmlu67VrquqYnwHvjLmNf1Ueretf7jwem/pqsypk3ljZC3leUAV41KhV3nmgOetcaVgRssxiDZDeLMmI+P5FEqVAd1TW1mGuLxMuzPoBPwHoj1qvCJJA8Si6o59pE35JXHLoC1FDDx7MDeJ81msDpmo4OAyG/PwWwpaKyubrlwCSTRQ3QLDBCjl4WgvbcPaQs/UtIXb0+oVq57MVlbiwFd4hU91QnZXYtxuumi1aU8FZlTZHkktMWNSR3sGEFpWIU1tiAJUe3epRrkZJGyYLuxAZSDR94lx8sghX10AJJyQ6dwCxvgfmVBu6wMzpuvH61uepnn5/Y6FKSihlziIa2Zy2Wp7G4WKdP7TUEPqCWz9xh08zr6LzvA6Ar3VOi0F7OIucP5W5kE7A5DzXrWI3IazOPyyWymqNEXNiWycvagOI3cbqiqVy4yUGrdF5k6bIb665t1znLJfCO1YJJqwhGtKiGrKqMTxYNkNPifoq41SseB8pE/E8UDBAKxuI35e7hbLnHQBAuLt1V3AzXc7Acytp2I7OU3S45tbHtH7uOzG8l3NLoo1R3zM1l3hDOxHYr2hFxcZgHynk3n1Pp09Oa0NaGtADRkAEMVAAABwgCABoBshuqSlv1UX10VKDfY5z5Q3uhNdU3Kr7m5nIaLm3ahL8S+FeQT7x8kHIbKPWqQm1q4CZbWFSsZA4W8z+QWaDlJ8cmhpIgXT5VN+47iu9zqh9lRMcLT75gmTG05ZHkvQrTB2Mz1PM6/opXsGjOFtqqnBZ8lUrU+jH2HZ1jB3R5nU9eqfXwwzwg5xOh0010Wre1AqAIOrLy2RTPO8WwqoJMSsXidq4HMQvZroArM4phIfMgLVRbKt/KJJJnk9evWb7tR4/uMeir6uN3IP/M74fRbXGMFDQSgdlexDLpwr1arXUgZ4Kbg5zuj3A93w18F2K9TQoOc1wvoZZwlnCZFwHCb29AcK1RtPd0xxf0/Vb7COxVGnBfNR3N5Lj8VrbS2Yxoaxoa0AAACAANoUrgC49mrna+OI/C/qXxgo/VlXSsQ3IAAJ7qSmVXgKvr3KROMRuWce2FVYm0BpdyUqtdAalVN7dioCwb6laNLY/UW0Sxe15Kt96EB98pX2EBMdaBekMBEN4eSSlig1JTJMB7cuEKexs5lRqFY7DopNMvPIKh5GWCuu8ZbbPcyo6AeH2fUEZ/GVDxLEpZ3SM/kpmP8AZwXYAc4Ag5HcSqel+z+o0f8ANLRtKwy0Fcp788+S1XNcGv8A2R2givc8yKTfIcb/AJs9Fador1zqoZ9wHM9c49IHqm4DUp2dkxrDMyfFxPe+nkqevfcUuOUzK5OrscpuCLau8jxdk/kmVroNEuMAKuuL5rRxE/qs1imLF5z93ZJTpHY+uC12YLO97TNeTTYdNeqqH1H1jDchudh+qqqlaTIHnzR2XzsgIaOQXco0UYcpGadzZosNtJLaNMS57g0c3EmBK9dtLRtvSZQZoz3j+Nx95x81hP2V4Y5znXtX3Wyyl1ccnu8hkPF3Jb+rT78grmfauozL0ovhdj0x8se0ncptasAo95c8AMQXRlP5qoq3e5K4cm0sI1Rjnkn3F0T4KKXlxDWiSdAorapcQ0Zk5ALW4PhgpNk5vOp5dAn0+lldLH6hssVaImHYGB36uZ5bD6lW/CBou1T1UStXXWxXQsJGPMrHlhX1FHqVVGfdqNUryk3uRaoYJFS4UOtXUapWPEANM5XKrlOPI5w1ZQbk5IL6oElUuLY8GtIbrnJ2CRNyeEFmT/aJeFvBTByJJcOYAOR6dOizvZfFKtOsHNqcA0dO7eUfI/qoPaTFjVqGDMHM6oGG4m1rhxtEcw2fNejp07jptjWcowSsTszk9qte1TYA3InVSHdpBsvOcPxSi8jhe2eWjvQq1FcLgWaGMH00bY2ZRoq+PuOih1MYduVVGoECpWA1MJoaaPWAuZYVrslS7aiSOImFRWjjWMMB4dz9FqaFqQ2IXY0umVfPky2TzwNZQ6pxtQpDKfKEnDac1tyUkU2qSNwjmV1QhWspBroNSY5EZ+inULdp/FziSgC6h2rBOwLpyHIKYx73ugO4dDkJ8Nd0rEJFCzYDPCecknXzK5Wq8Ak8IyOfX0RqlMUml0VKpLZAHyHVMcaT+EVWBs5cJJLgOZA9J5qt5Y3CPNbvEri3J/ie2HeDTykyJG3lz2Vae1NV4ILQ3YmZ9BuVs8Sw6g8nJzWjoeXprKyv7jpPd3QCYJgvaIAEkl0wI8VYtLXL3OPIvrNcZKh2IvOUk9XHNNaXuOclXpwMU4dwktIni0nkQDnGRUxmG8B0PdAkRBaXAQCOeauVUV0K7GU1vYuOZlXuB4B7Wo0HJgzc7LJo1jqdApQYMm97gIJBB5ZuyPKNpVbiNwWP7tTKe8w6Oj3SSI05ITi8NLsMZc8ns+G8LabWMAYxo4WtG0c+qdc4m1uQMu+S8ssO3TwadFgDmzwvcSZneCfXc5qyr4lALiYG5J/Mrx+p0FsLXu8nSrnGSyaO8vpMyoDq85rM1u1VBoycXnoMvXRRcJx37Tc06b+5SmX9QNvPIKyr7Osa6C74o9c7KWYDRWdmT7g5Dn5rRVbgASSsQceptflUAiBA5DQQjVMYFXJpUm5aeOEhNvqPLLOtixeeEZdVCq3NWS0iW/iBz9E2m0J76qwKbfMmX4S6H8aG6ogVKwUKviDW5Sr42Z6BgsC9Q7y+awZmTyCqrrFToMuqz2KYyymOJ7vAalx6DdaaaZ2MWUkixv8AETmSYHJee9osdNQllM5aF35D6o9w+4vDABZT5bkfzfRWeG9ldBGomYkeq7un0ka/dLsx2WuXCMF7NL2a9Ld2Pkw4HxyATWdjmZEx1zW71Cnaea+zU2hfVmiBUdHjPzW+d2OpxILdNDOR9M1Io9k6IiC3PIjUgxOWWe/ohKSl2RRaMNRxG5dkHf8AUSrTDsJdUIdUc9/TZbihhFFsCIy5dJy6KZ9kaIABnTLLrmAMlXiK6SH58lfhsUwGtYfNWZrvO0LjaZyHAIjKT13PPopIY7KAMhBgHKIyKiIRXGpz9EPhJ94mImVPfTcfvH0Gnrkmvo8/n+iOAZI4tm/j+CSeLMdD/ckoQqKdzmSOASTOX1y15K2biAaJE7CI4Rrn4LP2lF0ggDIyZGqsqTahgBkAGY58pRaiVrJLfidQyJ4Q4QMjsAYExJ6wo7a3CWkh3vS7XveQU+xtDkTkTxHTITl6qU/CWOzMkz+I7cuSG5IO1sz96/LhdIkHWJyJ1G22qo/Yz95pHLeJzjZehjs/TdIjrlH55JrcCpNB/hTrkOGcx1KZWius87tLl1OqGuIe3MwXADLfr4TmYR3VgCGth4zPUP3iNMtlsXG0YWl9J0OkH2jOfIxnn81YWTbJ44msYIlpg8JB5c5Tep9AbDzC5fVeG0WtIIJM5w3unM5dSq+8w0tEySdJI96JlzRy2iJyXs1WxsHuBeAXuB4XF0uI0ID5nYBRq/Z6k9/FIkAgEnj7p5gwT5yp6iJtZ4nUoVQRwU+suy8xMKRVtLquJLg6BPC2XRnEkAL1+z7K02QXND3gnvZ8MTl/DMiY8lZU8LAbwCGt24RHySylDOcDRUjxW37J3DgHFr46jhEf3K0ssENuRVLmjhz94OM7CBkvTLjCKYnM59J36rMYzQpQR3tDGmR5wq3Yh1FmPp4qBUNRxEjX+ZbXAcXoOEtyO68+rWR70tg/PwT7F7aAzcc1j1+lhfHjv6FlM3Hs9ZZijSNQg1cTbsZXnA7S0wIBd/iU9vaScmMefJcf/qp/DNfrRNndXxdvAVXdXrWAkkDmSqIXF3WyZT4Rzd9ApVt2LqVTxXFRzt4Ay8gt1H2dj7zwVyv+CtvO0D6h4LcT/MdPIbo+GdnXOPtazuIncn4LZWHZajTGTCfEgfkrRmD09eATnnJP5rqwrhBYiZ3Jvsp7SwpUwBLfUDnIPLzU1jxoOpJaCS6Nv/fxVgLCmPusBHQZHnmjNDQILvQfTJEGSrosqacJ0I73dGehG8jl1R/s73ExwjLZvFGXN3n6qY4tGjZjyld9u/aAoAiU8Of+JwEARkMhoN+Q9E9uGSQS90jfJEeXHPj9NPgotdzW58RzmZIHzUyEkCxb95ziR1AjwXRQpt+71ku+eqqa+KUBrWbH9Y9IUYYvRGjyR0D3ZeQU/Iho3kfyjf8AXVR33Lfxf/UGFRuxemPuvJ6Unzl4hMdijp7tGoZ3hjPg5wKbD+BeC3dct1759fiMkF120at8JMfnoqWpe13a06bR/M8u/wCoET1lDfRrkHiqBv8ARTAj/IuzyTbWDci5N438A/ySVD7Cr/56h6zSE/8AVJTa/kmUWdGo4DbPeVZW1Vw5LO0nKwpPKRxIpGgY85S4Ln2trRJcNfFVNJ5ykpz2jNDaFyL6nizAdzO6f+9KZOuvNZ1lRstG8IGIXDRkjsF3mvmnUAhwMGUE4Y3QQASXQMszvksjSuiB3PFEZ2ge0jiGSnpsm9Gpt8GDTltp59VPbYtiHAGYnn4gjNY7/wCUPnQwplDGKjukjcqbGibkbNg65JlSAqG3xPZxzGqk/vEbIMKZLurbiCrbnBmvGcD/AHopdO/BEIVa9ETvyQ2ph3FDV7JU51MeQUW47Fs0jzWhpXRdtC7Sql2RcBCO0XcZqj2NojUQrS2wC3ZGU+StHvpgd56Yy7pxLWPd4NKm0O47StaY91iNwTG35qO65fsyPEwuuFQnVrR0BP0UwHIVzdkJ0DcDxXRQbP8AEe4nxgegQr9lvwGacgiNyfijgmQFfEKLRJqsH9w/JQrjtDbAEirMa8ILo8eSommjBaWAOaSNAJGxVfWpDjmeGcg4f/obhOoIVyZpqXaZlQfwqdR+ugDRlrqnOurl33abAdC4lx9B9VW9iLEh1VryM+XTQrRVbYjLb/cwhJRi8EWWU77eo8S+u/wb3Gnl1+Ka3DqQMPbxZau7zh4F2oUmrSc0wTkkWTvPgimBkOr7NmbWgaDIAeOiVG7aSdPA/NG9iJMNmeaYbCTLWgJgZBuqMdOmaTag1cZE6xJ5ckZtrsRC6aGUSiTIB1VhmJMzpltvzUEvMd1ojPV30U9tkGzBySdbNOShCg7/AOIDpISVs6wbyXVMohWMa6ZlWdAEBJJI2RIm0mmUapbk6mFxJV7mHAOnh4meIp15QY33s5SSRTbYGBoGmNJUe7uGA8IbkuJK1ITIOteACOFFt6zncJb4FcSTpLArZPFKoXAgfFWFLD6juQC6kkCTG4PU/wDJAXaeEgZ8RJ32XUkr4CmIWjAcwT5lSBZ0x90Z9EkkuRsCIaNAB5Ln2oNMEpJJUwhHVWRxRmolbExGTUkkUQramJugnJU1/jNQnhlJJPGKBllFdkud1V9gOHtqt4X7JJJ5LgCZoLTABSd7Smc9D1CsLhuUfFJJUNlqIv2EFEZh4GySSKAxzrQITqIakkiKCqUwQodZkZpJI5IiM6oNFHq1wIhJJMEY2/KSSSgD/9k=',
      quantity: 0,
      price: 50,
      cost: 0,
    },
    {
      name: 'Grapes',
      description: 'Juicy grapes',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0ODs0dGvM1tEBSftQ3nNcOsKCbBD1Veyiw&s',
      quantity: 0,
      price: 120,
      cost: 0,
    },
    {
      name: 'Orange',
      description: 'Tangy oranges',
      imageUrl: 'https://m.media-amazon.com/images/I/41tRTl-dSjL.jpg',
      quantity: 0,
      price: 80,
      cost: 0,
    },
    {
      name: 'Strawberry',
      description: 'Fresh strawberries',
      imageUrl: 'https://www.health.com/thmb/zvfL1rCWAPg3XzidfAqURuCmttk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Strawberries-c5f434e7729e47c5b32c0deaa029386c.jpg',
      quantity: 0,
      price: 150,
      cost: 0,
    },
    {
      name: 'Pineapple',
      description: 'Sweet pineapples',
      imageUrl: 'https://www.starhealth.in/blog/wp-content/uploads/2022/08/Pineapples.jpg',
      quantity: 0,
      price: 200,
      cost: 0,
    },
    {
      name: 'Mango',
      description: 'Delicious ripe mangoes',
      imageUrl: 'https://plantparadise.in/cdn/shop/products/Background-hd-Mango-Wallpaper-Download_90144dd9-3d28-4186-a105-85ad7846a7f2.jpg?v=1691200169',
      quantity: 0,
      price: 120,
      cost: 0,
    },
    // Add more fruit products as needed
  ];
  
  @ViewChild('categoryScroll', { static: false }) categoryScroll!: ElementRef<HTMLDivElement>;
  @ViewChild('vegetablesScroll', { static: false }) vegetablesScroll!: ElementRef<HTMLDivElement>;
  @ViewChild('fruitsScroll', { static: false }) fruitsScroll!: ElementRef<HTMLDivElement>;


  // Filter dairy products based on search query
  filteredProducts() {
    return this.dairyProducts.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  // Filter vegetable products based on search query
  filteredVegetables() {
    return this.vegetableProducts.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  // Filter fruit products based on search query
  filteredFruits() {
    return this.fruitProducts.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  increment(product: Product) {
    product.quantity++;
    this.updateCost(product);
  }

  decrement(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
      this.updateCost(product);
    }
  }

  updateCost(product: Product) {
    product.cost = product.price * product.quantity;
  }

  addToCart(product: Product) {
    if (product.quantity > 0) {
      alert(`Added ${product.quantity} ${product.name}(s) to the cart. Total cost: Rs. ${product.cost}`);
    } else {
      alert(`Please select a quantity for ${product.name}.`);
    }
  }

  scrollLeft() {
    this.categoryScroll.nativeElement.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.categoryScroll.nativeElement.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  }

  scrollLeftVegetables() {
    this.vegetablesScroll.nativeElement.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  }

  scrollRightVegetables() {
    this.vegetablesScroll.nativeElement.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  }

  scrollLeftFruits() {
    this.fruitsScroll.nativeElement.scrollBy({
      left: -250,
      behavior: 'smooth',
    });
  }

  scrollRightFruits() {
    this.fruitsScroll.nativeElement.scrollBy({
      left: 250,
      behavior: 'smooth',
    });
  }

  scrollHorizontally(event: WheelEvent) {
    event.preventDefault();
    this.categoryScroll.nativeElement.scrollLeft += event.deltaY;
  }

  scrollHorizontallyVegetables(event: WheelEvent) {
    event.preventDefault();
    this.vegetablesScroll.nativeElement.scrollLeft += event.deltaY;
  }

  scrollHorizontallyFruits(event: WheelEvent) {
    event.preventDefault();
    this.fruitsScroll.nativeElement.scrollLeft += event.deltaY;
  }
  
  viewCart() {
    // Logic to view the cart, like navigating to a cart component
    alert('Navigating to cart...'); // Replace with actual logic
  }
  
}